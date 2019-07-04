import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Route | services/taxes', function(hooks) {
  setupTest(hooks)

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:services/taxes')
    assert.ok(route)
  })
})
