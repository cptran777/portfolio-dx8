import Ember from 'ember';

/**
 * This service can be passed between different components and routes on the Ember
 * application to keep track of the current route
 * @return {Object}
 */
export default Ember.Service.extend({
  activeRoute: null,

  init() {
    this._super(...arguments);
    this.set('activeRoute', 'home');
  },

  changeRoute(newRoute) {
    this.set('activeRoute', newRoute);
  }
});
