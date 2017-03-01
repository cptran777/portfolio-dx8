import Ember from 'ember';

export default Ember.Component.extend({
  /**
   * Will assign these classes in hyphenated-format to the element if the property
   * is true
   * @type {Array}
   */
  classNameBindings: ['isCollapsed',
                      'isExpandedXs:col-xs-12',
                      'isExpandedSm:col-sm-4',
                      'isExpandedMd:col-md-3'],

  /**
   * Whether the header component is collapsed or expanded
   * @type {Boolean}
   */
  isCollapsed: false,
  isExpandedXs: true,
  isExpandedSm: true,
  isExpandedMd: true,
  /**
   * Observes the isCollapsed property and assigns classNames when needed
   * @type {Function}
   */
  assignClass: Ember.observer('isCollapsed', function() {
    const isCollapsed = this.get('isCollapsed');

    this.setProperties({
      isExpandedXs: !isCollapsed,
      isExpandedMd: !isCollapsed,
      isExpandedSm: !isCollapsed
    });
  }),

  actions: {
    testAction() {
      console.log('action hit');
      this.toggleProperty('isCollapsed');
      this.get('toggleSidebar')(this.get('isCollapsed'));
    }
  }
});
