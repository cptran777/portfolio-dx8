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
  classNames: ['col-sm-12', 'col-md-6', 'info-card'],

  /**
   * Class name bindings for the rendered component that are connected to the component
   * properties
   * @type {Array}
   */
  classNameBindings: ['isExpanded:info-card--expanded:info-card--unexpanded', 'isHidden:hidden'],

  cardClassBinding: Ember.computed('isExpanded', function() {
    const baseClass = 'info-card__card';
    const result = [baseClass];

    if (this.get('isExpanded')) {
      result.push(`${baseClass}--expanded`);
    } else {
      result.push(`${baseClass}--unexpanded`);
    }

    return result.join(' ');
  }),

  /**
   * Flag for the expanded state of the card. Will be toggled by a user action on the view
   * @type {Boolean}
   */
  isExpanded: false,

  /**
   * Flags for controlling the animation of the image. Everything happens in steps after the
   * card actually expands or unexpands. 
   * @type {Boolean}
   */
  showImage: true,
  expandImage: true,

  /**
   * Listens to a change in the expanded state and times the animation of the image of the card
   * to follow
   */
  setImage: Ember.observer('isExpanded', function() {
    this.setProperties({
      showImage: false,
      expandImage: false
    });

    setTimeout(() => {
      this.set('showImage', true);

      setTimeout(() => {
        this.set('expandImage', true);
      }, 250);
    }, 1100);
  }),
  
  actions: {
    /**
     * When toggling the expanded state of the card, a resolver function may have been passed
     * in, in which case the resolver will be called accordingly
     * @return {undefined} - the return value for the resolver is expected to be undefined as it
     *                       only should have side effects as a function
     */
    onToggleExpanded() {
      const resolver = this.attrs.expandedResolver;

      this.toggleProperty('isExpanded');
      return resolver && resolver(this.get('isExpanded'), this.get('infoId'));
    }
  }
});
