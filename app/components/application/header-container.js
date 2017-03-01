import Ember from 'ember';
import { capitalize } from 'charlie-tran/utils/formatting';

export default Ember.Component.extend({
  /**
   * Injected Ember service to keep track of current route for navigation
   * @type {Object}
   */
  currentRoute: Ember.inject.service(),

  /**
   * Will assign these classes in hyphenated-format to the element if the property
   * is true
   * @type {Array}
   */
  classNameBindings: ['isCollapsed',
                      'isExpanded'],

  /**
   * Whether the header component is collapsed or expanded
   * @type {Boolean}
   */
  isCollapsed: false,
  isExpanded: true,

  /**
   * Observes the isCollapsed property and assigns classNames when needed
   * @type {Function}
   */
  assignClass: Ember.observer('isCollapsed', function() {
    const isCollapsed = this.get('isCollapsed');

    this.setProperties({
      isExpanded: !isCollapsed,
    });
  }),

  /**
   * List of links to be rendered as well as tracking of the active link
   * @return {Array} an array of objects
   */
  linkedList: Ember.computed('currentRoute.activeRoute', function() {
    const activeRoute = this.get('currentRoute.activeRoute');
    const directoryList = ['home', 'portfolio', 'interests'];

    return directoryList.map(directory => ({
      val: directory,
      message: directory,
      selected: activeRoute === directory
    }));
  }),

  actions: {
    testAction() {
      this.toggleProperty('isCollapsed');
      this.get('toggleSidebar')(this.get('isCollapsed'));
    },

    onCollapse() {
      this.set('isCollapsed', true);
      this.get('toggleSidebar')(true);
    },

    onExpand() {
      this.set('isCollapsed', false);
      this.get('toggleSidebar')(false);
    }
  }
});
