import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('task-create-edit-form', 'Integration | Component | task create edit form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{task-create-edit-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#task-create-edit-form}}
      template block text
    {{/task-create-edit-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
