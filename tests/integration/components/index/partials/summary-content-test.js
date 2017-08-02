import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('index/partials/summary-content', 'Integration | Component | index/partials/summary content', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{index/partials/summary-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#index/partials/summary-content}}
      template block text
    {{/index/partials/summary-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
