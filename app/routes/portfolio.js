import Ember from 'ember';

export default Ember.Route.extend({
  /**
   * Injected Ember service to keep track of current route for navigation
   * @type {Object}
   */
  currentRoute: Ember.inject.service(),

  actions: {
    /**
     * Following a successful transition to the home route, will change the route on
     * the service
     * @return {[type]} [description]
     */
    didTransition() {
      this.get('currentRoute').changeRoute('portfolio');
    }
  }
});
