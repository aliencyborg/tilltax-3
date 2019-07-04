import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Route | services/taxes/day-care', function(hooks) {
  setupTest(hooks)

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:services/taxes/day-care')
    assert.ok(route)
  })
})
