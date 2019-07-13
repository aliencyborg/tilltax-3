import Route from '@ember/routing/route'
import { action } from '@ember/object'
import { inject as service } from '@ember/service'
import { scheduleOnce } from '@ember/runloop'

export default class HomeIndexRoute extends Route {
  @service router
  @service showHide

  @action
  didTransition() {
    scheduleOnce('afterRender', () => {
      this._showHideStuff()
    })
  }

  queryParams = {
    splash: { refreshModel: true }
  }

  _showHideStuff() {
    const {
      currentRoute: { queryParams }
    } = this.router

    if (queryParams.splash === 'false') {
      this.showHide.showSplash = false
    } else {
      this.showHide.showSplash = true
    }
  }
}
