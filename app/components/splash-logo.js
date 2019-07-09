import Component from '@glimmer/component'
import { action } from '@ember/object'

export default class SplashLogoComponent extends Component {
  @action
  dismiss() {
    this.args.onDismiss()
  }
}
