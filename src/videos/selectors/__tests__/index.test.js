import { getVisibleClips } from '../index';

const clip1 = { name: 'clip 1', tag: 'tag 1' };
const clip2 = { name: 'new clip 2', tag: 'tag 2' };
const clip3 = { name: 'this is the third new clip', tag: '' };
const clips = [clip1, clip2, clip3];
const duration = 72.543;
const loading = false;
const paused = true;
const videoUrl = 'videoUrl';
const video1 = {
  duration,
  loading,
  paused,
  videoUrl,
  clips
};
const videos = [ video1 ];

const nameFilter = 'new clip';
const tagFilter = 'tag';
const filters = { nameFilter, tagFilter };

const state = { videos, filters };
const props = { videoIndex: 0 };

describe('Videos / Selectors / index', () => {
  let result;

  describe('getVisibleClips', () => {
    let expectedVisibleClips;

    beforeAll(() => {
      result = getVisibleClips(state, props);
      expectedVisibleClips = [clip2];
    });

    it('should return an array with the visible clips', () =>
      expect(result).toEqual(expectedVisibleClips));
  });
});
