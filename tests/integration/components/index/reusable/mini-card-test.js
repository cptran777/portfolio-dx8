import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('index/reusable/mini-card', 'Integration | Component | index/reusable/mini card', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{index/reusable/mini-card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#index/reusable/mini-card}}
      template block text
    {{/index/reusable/mini-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
