import Ember from 'ember';

export default Ember.Component.extend({
  /**
   * List of classes that will compose the app-body <div> class
   * @type {Array}
   */
  bodyClasses: ['col-xs-12', 'col-sm-10', 'col-md-10'],

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
    toggleSidebar(isCollapsed) {
      const { 
        collapsedClasses, 
        expandedClasses 
      } = this.getProperties('collapsedClasses', 'expandedClasses');

      this.set(
        'bodyClasses',
        isCollapsed ? collapsedClasses : expandedClasses);
    }
  }
});
