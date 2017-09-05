import Ember from 'ember';
import baseInfoCard from 'charlie-tran/components/interests/reusable/info-card';

const { computed } = Ember;

const musicOptions = [{ artist: 'Taylor Swift', id: 'e-ORhEE9VVg', song: 'Blank Space' },
                      { artist: 'Shinedown', id: 'MLeIyy2ipps', song: '45' },
                      { artist: 'Disney', id: 'ZSS5dEeMX64', song: 'I\'ll Make a Man Out of You' },
                      { artist: 'Boston', id: 'SSR6ZzjDZ94', song: 'More Than a Feeling' },
                      { artist: 'Aerosmith', id: 'sZfZ8uWaOFI', song: 'Dream On' },
                      { artist: 'Flo Rida', id: 'qoSgMHvUB6Y', song: 'Low' },
                      { artist: '3 Doors Down', id: 'kPBzTxZQG5Q', song: 'Here Without You' },
                      { artist: 'Wiz Khalifa', id: 'RgKAFK5djSk', song: 'See You Again' },
                      { artist: 'Eminem', id: '_Yhyp-_hX2s', song: 'Lose Yourself' },
                      { artist: 'Bruno Mars', id: 'OPf0YbXqDm0', song: 'Uptown Funk' },
                      { artist: 'Survivor', id: 'btPJPFnesV4', song: 'Eye of the Tiger' },
                      { artist: 'Ed Sheeran', id: 'JGwWNGJdvx8', song: 'Shape of You' },
                      { artist: 'One Republic', id: 'hT_nvWreIhg', song: 'Counting Stars' },
                      { artist: 'Imagine Dragons', id: 'ktvTqknDobU', song: 'Radioactive' }];

export default baseInfoCard.extend({
  /**
   * The current video id that gets passed into the music player so that it links to the correct
   * song
   * @type {String}
   */
  videoId: 'e-ORhEE9VVg',

  /**
   * Tracks the current song information by tracking the current object that houses the song's
   * artist, song title, and id for youtube
   * @type {Object}
   */
  currentSong: musicOptions[0],

  /**
   * Tracks the index of the currently playing song so that navigation to play the next in the
   * queue can use this information to easily access the next item in the list
   * @type {Number}
   */
  currentSongIdx: computed('currentSong', function() {
    return this.get('currentSong.idx');
  }),

  /**
   * Maps the music options variable into a renderable list of music options that can be passed
   * to the template to be rendered as a for each
   * @type {Array}
   */
  renderedMusicOptions: musicOptions.map((song, idx) => {
    song.idx = idx;

    return song;
  }),

  /**
   * Calculates the max allowable song idx based on the length of the current rendered song list
   * @type {Number}
   */
  maxSongIdx: computed('renderedMusicOptions', function() {
    return this.get('renderedMusicOptions').length;
  }),

  actions: {
    setVid(video) {
      this.set('currentSong', video);
    },

    changeSong(type) {
      const { currentSongIdx, maxSongIdx } = this.getProperties('currentSongIdx', 'maxSongIdx');

      let next;

      type = type || 'advance';

      if (currentSongIdx < maxSongIdx && type === 'advance') {
        this.send('setVid', this.get('renderedMusicOptions')[currentSongIdx + 1]);
      } else if (currentSongIdx > 0 && type === 'reverse') {
        this.send('setVid', this.get('renderedMusicOptions')[currentSongIdx - 1]);
      }
    }
  }
});
