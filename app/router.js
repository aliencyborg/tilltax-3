import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function() {
  this.route('home', function() {
    this.route('services', function() {
      this.route('accounting')
      this.route('quickbooks')
      this.route('taxes', function() {
        this.route('corporation')
        this.route('day-care')
        this.route('individual')
        this.route('military')
        this.route('payroll')
        this.route('small-business')
      })
    })
  })

  this.route('services', function() {
    this.route('quickbooks', function() {
      this.route('payroll')
    })
  })
})

export default Router
