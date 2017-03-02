import Ember from 'ember';

export default Ember.Component.extend({
  /**
   * Injected Ember service to track the state of the navbar
   * @type {Object}
   */
  navbarState: Ember.inject.service(),

  /**
   * Computes the expanded or collapsed state of the navbar based on the
   * injected service
   * @return {Boolean}
   */
  isCollapsed: Ember.computed('navbarState.isCollapsed', function() {
    return this.get('navbarState.isCollapsed');
  }),

  /**
   * Listens for change in the isCollapsed property and sets the page header
   * class accordingly
   * @return {String}
   */
  pageHeaderClass: Ember.computed('isCollapsed', function() {
    return this.get('isCollapsed') ? 'header-collapsed' : 'header-expanded';
  })
});
