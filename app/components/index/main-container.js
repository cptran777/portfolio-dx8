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
    const classList = ['col-xs-12 col-sm-12 col-md-12'];

    classList.push(isCollapsed ? 'header-collapsed' : 'header-expanded');
    classList.push(isCoverExpanded ? 'show-cover' : 'hide-cover');

    return classList.join(' ');
  }),

  /**
   * Keeps track of the current tab of the index route. Options are 'index',
   * 'interests', and 'misc' (for now)
   * @type {String}
   */
  currentTab: 'index',

  actions: {
    /**
     * Changes cover expanded state to modify the page header class accordingly
     * @param  {Boolean}
     * @return {undefined}
     */
    onChangeCover(isExpanded) {
      this.set('isCoverExpanded', isExpanded);
    },

    /**
     * Changes the current tab to its new value. Activated from the page-header component
     * when a user clicks on a tab
     * @param {String} tabName - name of the new tab to switch to
     * @return {undefined} 
     */
    onNewTab(tabName) {
      this.set('currentTab', tabName);
    }
  }
});
