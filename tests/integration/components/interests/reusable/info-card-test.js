import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('interests/reusable/info-card', 'Integration | Component | interests/reusable/info card', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{interests/reusable/info-card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#interests/reusable/info-card}}
      template block text
    {{/interests/reusable/info-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
