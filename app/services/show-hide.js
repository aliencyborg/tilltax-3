import Service from '@ember/service'
import { tracked } from '@glimmer/tracking'

export default class ShowHideService extends Service {
  @tracked showSplash = true
}
