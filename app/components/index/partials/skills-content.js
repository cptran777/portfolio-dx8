/**
 * components/index/partials/skills-content.js
 *
 * This component is a special partial component unique to the index route in
 * the application that handles the rendering of the skills window. It's not
 * a reusable component unless the exact information were to happen to come up
 * elsewhere and is separated from the main-container purely for clean, modular
 * code
 *
 * Actually it will be kind of reusable. Will store static information to render on the page, but
 * then use different flags in order to render the correct list of panels
 */
import Ember from 'ember';

/**
 * Points to the directory of the images
 * @type {String}
 */
const basePath = 'assets/images/';
/**
 * Filesnames of the images
 * @type {Array}
 */
// These are specifically for the skills window
const firstRowImages = ['logo-js.png', 'logo-react.png', 'logo-ember.png', 'logo-redux.png'];
const secondRowImages = ['logo-html5.png', 'logo-css3.png', 'logo-jquery.gif', 'logo-d3.png'];
const thirdRowImages = ['logo-threejs.png', 'logo-createjs.png', 'logo-angular.png', 'logo-bootstrap.png'];
const fourthRowImages = ['logo-node.png', 'logo-express.png', 'logo-websocket.png', 'logo-webrtc.png'];
const fifthRowImages = ['logo-mysql.png', 'logo-redis.png', 'logo-postgres.png', 'logo-mongodb.png'];
// These are for the currently working on window
const workingOnFirstRow = ['logo-python.png', 'logo-c.png', 'logo-csharp.png', 'logo-unity.png'];

/**
 * Helper function to be passed into the rows that appends the base path to the image file
 * @param  {String} image - image file name
 * @return {String}       - appended path
 */
const appendBase = image => basePath + image;

export default Ember.Component.extend({
  /**
   * Houses the links for the images in each row of skills
   * @type {Array}
   */
  firstRowImages: firstRowImages.map(appendBase),
  secondRowImages: secondRowImages.map(appendBase),
  thirdRowImages: thirdRowImages.map(appendBase),
  fourthRowImages: fourthRowImages.map(appendBase),
  fifthRowImages: fifthRowImages.map(appendBase),
  // These are for the currently working on items
  workingOnFirstRow: workingOnFirstRow.map(appendBase),

  /**
   * Groups all of the rows of images together for easy rendering
   * @type {Array}
   */
  rowsOfImages: Ember.computed('content', function() {
    const content = this.get('content');

    switch (content) {
      case 'currentWorking':
        return [ this.get('workingOnFirstRow') ];

      default:
        return [
          this.get('firstRowImages'),
          this.get('secondRowImages'),
          this.get('thirdRowImages'),
          this.get('fourthRowImages'),
          this.get('fifthRowImages')
        ];
    }
  })
});
