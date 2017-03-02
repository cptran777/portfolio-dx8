import Ember from 'ember';
import { capitalize } from 'charlie-tran/utils/formatting';

export default Ember.Component.extend({
  /**
   * Ember injected service to share collapsed state with other
   * comopnents
   * @type {Object}
   */
  navbarState: Ember.inject.service(),

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
   * Directory to route map that ties application names to
   * router records
   * @type {Object}
   */
  directoryMap: {
    home: 'index',
    portfolio: 'portfolio',
    interests: 'interests'
  },

  /**
   * List of links to be rendered as well as tracking of the active link
   * @return {Array} an array of objects
   */
  linkedList: Ember.computed('currentRoute.activeRoute', function() {
    const activeRoute = this.get('currentRoute.activeRoute');
    const directoryMap = this.get('directoryMap');
    const directoryList = Object.keys(directoryMap);

    return directoryList.map(directory => ({
      val: directoryMap[directory],
      message: capitalize(directory),
      selected: activeRoute === directory
    }));
  }),

  actions: {
    onCollapse() {
      this.set('isCollapsed', true);
      this.get('navbarState').collapse();
      this.get('toggleSidebar')(true);
    },

    onExpand() {
      this.set('isCollapsed', false);
      this.get('navbarState').expand();
      this.get('toggleSidebar')(false);
    },

    onNewRoute(routeName) {
      this.get('goToRoute')(routeName);
    }
  }
});
