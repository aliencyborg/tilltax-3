import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Route | services/taxes/small-business', function(hooks) {
  setupTest(hooks)

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:services/taxes/small-business')
    assert.ok(route)
  })
})
