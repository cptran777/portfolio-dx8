import Ember from 'ember';
import randomUsername from 'charlie-tran/utils/random-username';
import randomMessage from 'charlie-tran/utils/random-message';

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
  messageList: [{
    user: 'Pro Genji',
    message: 'Hello! Welcome to Charlie\'s personal site!',
    color: 'chat-color-6'
  }],

  /**
   * List of saved userNames that can be used instead of generating a new one
   * @type {Array}
   */
  usernameList: [{
    user: 'Pro Genji',
    color: 'chat-color-6'
  }, {
    user: 'Pro Hanzo Main',
    color: 'chat-color-4'
  }],

  generateMessage(newMessage, username) {
    const messageList = this.get('messageList');
    const usernameList = this.get('usernameList');
    const currentUserLength = usernameList.length;
    const rng = (Math.random() * (currentUserLength * 1.1)) + 1;
    const color = `chat-color-${Math.ceil(Math.random() * 9)}`;
    let user;

    newMessage = newMessage || randomMessage();

    // If username, find if username already exists in user list:
    if (username) {
      user = usernameList.find(person => person.user === username);
      if (!user) {
        user = { color, user: username };
        this.set('usernameList', usernameList.concat(user));
      }
    } else {
      user = rng > currentUserLength ?
        { color, user: randomUsername() } :
        usernameList[Math.floor(Math.random() * currentUserLength)];
    }

    this.set('messageList', messageList.concat({
      user: user.user,
      color: user.color,
      message: newMessage
    }));
  }
});
