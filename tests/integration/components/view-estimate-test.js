import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('view-estimate', 'Integration | Component | view estimate', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{view-estimate}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#view-estimate}}
      template block text
    {{/view-estimate}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
