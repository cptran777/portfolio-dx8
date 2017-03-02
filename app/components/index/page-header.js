import Ember from 'ember';

export default Ember.Component.extend({
  /**
   * Boolean for whether or not to expand banner to show the cover
   * @type {Boolean}
   */
  showCover: false,

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
