import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Route | services/taxes/military', function(hooks) {
  setupTest(hooks)

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:services/taxes/military')
    assert.ok(route)
  })
})
