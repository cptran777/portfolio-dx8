/**
 * components/interests/partials/card-content.js
 *
 * The purpose of this component is to act as a partial component that renders the text
 * content of the cards in the interests route. It is a presentational component but does
 * contain some logic, namely by taking in two parameters to process: whether the card is
 * expanded or not (to return expanded or collapsed content) and the identifier for the
 * content to render (which corresponds to the InfoId in the main container)
 *
 * @example
 * {{interests/partials/card-content
 *   content="virtualreality"
 *   expanded=false}}
 */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span'
});
