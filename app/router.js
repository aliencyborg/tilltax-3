import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function() {
  this.route('home', { path: '/' }, function() {
    this.route(
      'services',
      { path: '/services', resetNamespace: true },
      function() {
        this.route('accounting')
        this.route('quickbooks', function() {
          this.route('payroll')
        })
        this.route('taxes', function() {
          this.route('corporation')
          this.route('day-care')
          this.route('individual')
          this.route('military')
          this.route('small-business')
        })
      }
    )
  })
})

export default Router
