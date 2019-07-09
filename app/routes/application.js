import Route from '@ember/routing/route'
import { action } from '@ember/object'
import { inject as service } from '@ember/service'
import { scheduleOnce } from '@ember/runloop'

export default class ApplicationRoute extends Route {
  @service metrics
  @service router

  @action
  didTransition() {
    this._super(...arguments)

    scheduleOnce('afterRender', () => {
      this._setSplash()
      this._trackPage()
    })
  }

  _setSplash() {
    if (this.router.currentURL !== '/') {
      this.controller.showSplash = false
    } else {
      this.controller.showSplash = true
    }
  }

  _trackPage() {
    const page = this.router.currentURL
    const title = this.router.currentRouteName

    this.metrics.trackPage({ page, title })
  }
}
