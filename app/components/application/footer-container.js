import Ember from 'ember';

export default Ember.Component.extend({
  /**
   * Ember injected service to show chat box
   * @type {Object}
   */
  chatterBox: Ember.inject.service(),

  /**
   * Creates a list of messages from the chatterbox service
   * @return {Array}
   */
  messages: Ember.computed('chatterBox.messageList', function() {
    return this.get('chatterBox.messageList');
  }),

  actions: {
    testAction() {
      this.get('chatterBox').generateMessage('testing', 'John Stamos');
    },

    testActionTwo() {
      this.get('chatterBox').generateMessage('another test');
    }
  }
});
