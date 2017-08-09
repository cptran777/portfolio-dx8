/**
 * Acts as the main component for the interests route. Handles the upper level
 * actions that should affect multiple components
 */
import Ember from 'ember';

/**
 * The interests route is comprised of multiple cards that can be expanded or collapsed
 * by the user depending on their action. Each row should be seen as a set of two cards.
 * As each card expands, the paired card should be hidden to not disrupt the flow of the
 * row. But when one collapses, the other should be placed back. This map makes it easier
 * @type {Object}
 */
const infoCardMap = {
  virtualreality: 'machinelearning',
  gamedev: 'python',
  music: 'television',
  games: 'sports'
};
// Create the map that will track the actual hidden state of each info card by its identifier
const hiddenState = Ember.Object.create({});
// Create opposite side mapping
Object.keys(infoCardMap).forEach((key) => {
  let val = infoCardMap[key];

  infoCardMap[val] = key;
});
// Put default values for each of the total set of keys into the created expanded state
// object. This object will be put into a property on the main container component. Since
// We only expect one of these components to be used in the application, a singleton object
// won't be an issue
Object.keys(infoCardMap).forEach((key) => {
  hiddenState.set(key, false);
});
// Adding one for the unpaired hobbies, but most likely will not end up using it?
hiddenState.set('hobbies', false);

export default Ember.Component.extend({
  /**
   * Inserting object for tracking the hidden state, initialized above, in a property of
   * the same name
   * @type {Object}
   */
  hiddenState,

  actions: {
    /**
     * When an info card has been clicked to be expanded, a resolver from the main
     * container may be called in order to let the other card know that it should be 
     * hidden. This function uses the id(type) of card and the expanded state of the card
     * that called the resolver to make that decision
     * @param  {Boolean} expanded - expanded state of the card that called this resolver
     * @param  {String}  type     - the id or type of the card's information that can be
     *                              used by the infoCardMap to determine its pair
     * @return {undefined}
     */
    expandedResolver(expanded, type) {
      const pair = infoCardMap[type];

      if (expanded) {
        hiddenState.set(pair, expanded);
      } else {
        setTimeout(() => {
          hiddenState.set(pair, expanded);
        }, 1000);
      }
    }
  }
});
