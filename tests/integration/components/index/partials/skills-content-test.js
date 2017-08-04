import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('index/partials/skills-content', 'Integration | Component | index/partials/skills content', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{index/partials/skills-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#index/partials/skills-content}}
      template block text
    {{/index/partials/skills-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
