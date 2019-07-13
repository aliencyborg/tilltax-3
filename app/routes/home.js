import Route from '@ember/routing/route'
import { action } from '@ember/object'
import { inject as service } from '@ember/service'
import { scheduleOnce } from '@ember/runloop'

export default class HomeRoute extends Route {
  @service router
  @service showHide

  @action
  didTransition() {
    scheduleOnce('afterRender', () => {
      this._showHideStuff()
    })
  }

  _showHideStuff() {
    const { currentRouteName } = this.router

    if (currentRouteName !== 'home.index') {
      this.showHide.showSplash = false
    }
  }
}
