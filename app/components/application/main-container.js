import Ember from 'ember';

export default Ember.Component.extend({
  /**
   * List of classes that will compose the app-body <div> class
   * @type {Array}
   */
  bodyClasses: ['col-xs-12', 'col-sm-10', 'col-md-10', 'menu-expanded'],

  /**
   * Observes the body classes and combines them into a renderable string
   * @return {String}
   */
  bodyClass: Ember.computed('bodyClasses', function() {
    return this.get('bodyClasses').join(' ');
  }),

  /**
   * List of classes when menu is collapsed
   * @type {Array}
   */
  collapsedClasses: ['col-xs-12', 'col-sm-10', 'col-md-10', 'menu-collapsed'],

  /**
   * List of classes when menu is expanded (normal)
   * @type {Array}
   */
  expandedClasses: ['col-xs-12', 'col-sm-10', 'col-md-10', 'menu-expanded'],

  /**
   * List of classes for footer-container
   * @type {Array}
   */
  footerClass: 'col-xs-12 col-sm-2 col-md-2',

  actions: {
    /**
     * Handles toggle of the sidebar from the parent container level
     * @param  {Boolean} isCollapsed
     * @return {undefined}
     */
    toggleSidebar(isCollapsed) {
      const {
        collapsedClasses,
        expandedClasses
      } = this.getProperties('collapsedClasses', 'expandedClasses');

      this.set(
        'bodyClasses',
        isCollapsed ? collapsedClasses : expandedClasses);
    },

    /**
     * Passes route transition action from header to application route object
     * @param  {String} routeName
     * @return {undefined}
     */
    goToRoute(routeName) {
      this.get('goToRoute')(routeName);
    }
  }
});
