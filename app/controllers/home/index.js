import Controller from '@ember/controller'
import { action } from '@ember/object'
import { inject as service } from '@ember/service'
import { tracked } from '@glimmer/tracking'

export default class HomeIndexController extends Controller {
  queryParams = ['splash']
  splash = true
  @service showHide
  @tracked splash

  @action
  hideSplash() {
    this.showHide.showSplash = false
    this.splash = false
  }
}
