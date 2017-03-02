import Ember from 'ember';

export default Ember.Component.extend({

  classNameBindings: ['isCoverExpanded:show-cover', 'isCoverHidden:hide-cover'],

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
   * Boolean for whether or not the cover is expanded
   * @type {Boolean}
   */
  isCoverExpanded: false,

  /**
   * Boolean that is the opposite of isCoverExpanded
   * @return {Boolean}
   */
  isCoverHidden: Ember.computed.not('isCoverExpanded'),

  /**
   * Listens for change in the isCollapsed property and sets the page header
   * class accordingly
   * @return {String}
   */
  pageHeaderClass: Ember.computed('isCollapsed', 'isCoverExpanded', function() {
    const {
      isCollapsed,
      isCoverExpanded
    } = this.getProperties('isCollapsed', 'isCoverExpanded');
    const classList = [];

    classList.push(isCollapsed ? 'header-collapsed' : 'header-expanded');
    classList.push(isCoverExpanded ? 'show-cover' : 'hide-cover');

    return classList.join(' ');
  }),

  actions: {
    /**
     * Changes cover expanded state to modify the page header class accordingly
     * @param  {Boolean}
     * @return {undefined}
     */
    onChangeCover(isExpanded) {
      this.set('isCoverExpanded', isExpanded);
    }
  }
});
