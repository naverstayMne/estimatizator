import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('estimate-list-all', 'Integration | Component | estimate list all', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{estimate-list-all}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#estimate-list-all}}
      template block text
    {{/estimate-list-all}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
