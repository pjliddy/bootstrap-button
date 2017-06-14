import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('theme-layout/new-theme', 'Integration | Component | theme layout/new theme', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{theme-layout/new-theme}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#theme-layout/new-theme}}
      template block text
    {{/theme-layout/new-theme}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
