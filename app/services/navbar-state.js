import Ember from 'ember';

/*
 * The menu state service tracks whether the navbar is expanded or
 * collapsed so that other components can behave accordingly
 */
export default Ember.Service.extend({
  /**
   * Holds the collapsed state of the menu
   * @type {Boolean}
   */
  isCollapsed: false,

  /**
   * Called to actually change the state to true
   * @method collapse
   * return {undefined}
   */
  collapse() {
    this.set('isCollapsed', true);
  },

  /**
   * Called to actually change the state to false
   * @method expand
   * return {undefined}
   */
  expand() {
    this.set('isCollapsed', false);
  }
});
