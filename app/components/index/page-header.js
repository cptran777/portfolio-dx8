import Ember from 'ember';

/**
 * Constants for the static information used to render the page header
 * @type {Array}
 */
const headerTabOptions = [{
  name: 'About Me',
  val: 'index'
}, {
  name: 'My Interests',
  val: 'interests'
}, {
  name: 'Misc',
  val: 'misc'
}].map(option => Ember.Object.create(option));

export default Ember.Component.extend({
  /**
   * Boolean for whether or not to expand banner to show the cover
   * @type {Boolean}
   */
  showCover: false,

  renderedTabs: Ember.computed('currentTab', function() {
    const currentTab = this.get('currentTab');
    headerTabOptions.forEach((option) => {
      option.set('selected', option.val === currentTab);
    });

    return headerTabOptions;
  }),

  actions: {
    onShowCover() {
      this.set('showCover', true);
      this.get('onChangeCover')(true);
    },

    onHideCover() {
      this.set('showCover', false);
      this.get('onChangeCover')(false);
    }
  }
});
