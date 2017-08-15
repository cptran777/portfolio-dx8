import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('interests/partials/virtual-reality', 'Integration | Component | interests/partials/virtual reality', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{interests/partials/virtual-reality}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#interests/partials/virtual-reality}}
      template block text
    {{/interests/partials/virtual-reality}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
