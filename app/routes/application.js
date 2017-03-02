import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    goToRoute(routeName) {
      this.transitionTo(routeName);
    }
  }
});
