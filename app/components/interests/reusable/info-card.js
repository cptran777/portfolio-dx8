/**
 * components/interests/reusable/info-card.js
 *
 * This file contains the logic for the component that renders the info-card that appears
 * in the interests route. These cards are styled to have a picture and information
 * section below
 */
import Ember from 'ember';

export default Ember.Component.extend({
  /**
   * Class name bindings for the rendered component
   * @type {Array}
   */
  classNames: ['col-sm-12', 'col-md-6', 'info-card']
});
