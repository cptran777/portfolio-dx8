import Ember from 'ember';

export default Ember.Component.extend({
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
