import Ember from 'ember';

let baseNumber = 0;

export default Ember.Component.extend({
  /**
   * Ember injected service to show chat box
   * @type {Object}
   */
  chatterBox: Ember.inject.service(),

  didInsertElement() {
    const generateMessage = () => {
      const randomNumber = Math.floor(Math.random() * 12000) + 7000 + baseNumber;
      baseNumber += 100;

      this.get('chatterBox').generateMessage();
      setTimeout(() => {
        generateMessage();
      }, randomNumber);
    };

    this.get('chatterBox').generateMessage('WELCOME FELLOW HUMAN', 'I_M NOT BOT');

    setTimeout(() => {
      generateMessage();
    }, 7000);
  },

  /**
   * Creates a list of messages from the chatterbox service
   * @return {Array}
   */
  messages: Ember.computed('chatterBox.messageList', function() {
    return this.get('chatterBox.messageList');
  }),

  /**
   * Guest username input
   * @type {String}
   */
  guestUsernameInput: null,

  /**
   * Guest chat input
   * @type {String}
   */
  guestChatInput: null,

  /**
   * Guest username calculated from their response
   * @return {String}
   */
  guestUsername: Ember.computed('guestUsernameInput', function() {
    const username = this.get('guestUsernameInput');

    return (!username || username.length === 0) ? 'Anonymous' :
      username.length > 20 ? username.slice(0, 20) : username;
  }),

  actions: {
    onSendMessage() {
      const username = this.get('guestUsername');
      const message = this.get('guestChatInput');
      this.get('chatterBox').generateMessage(message, username);
      this.set('guestChatInput', null);
    }
  }
});
