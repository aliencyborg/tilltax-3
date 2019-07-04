import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Route | services/quickbooks', function(hooks) {
  setupTest(hooks)

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:services/quickbooks')
    assert.ok(route)
  })
})
