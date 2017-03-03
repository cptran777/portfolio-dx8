import Ember from 'ember';
import randomUsername from 'charlie-tran/utils/random-username';

/*
 * The chatter box service can be passed to various components to do a sort of
 * live update of a "chat box" feed on the right banner so that it can not only
 * randomly auto-update but also react to user interactions
 */
export default Ember.Service.extend({
  /**
   * A list of objects for messages, for each message there should be a username
   * and a message attached
   * @type {Array}
   */
  messageList: [],

  /**
   * List of saved userNames that can be used instead of generating a new one
   * @type {Array}
   */
  usernameList: [],

  generateMessage(newMessage, username) {
    const messageList = this.get('messageList');
    const usernameList = this.get('usernameList');
    const currentUserLength = usernameList.length;
    const rng = (Math.random() * (currentUserLength * 1.1)) + 1;

    if (rng > currentUserLength && !username) {
      username = randomUsername();
    } else {
      username = username || usernameList[Math.floor(Math.random() * currentUserLength)];
    }

    this.set('messageList', messageList.concat({
      user: username,
      message: newMessage
    }));
  }
});
