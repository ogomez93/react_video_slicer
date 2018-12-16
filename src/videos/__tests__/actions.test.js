import { addClip } from '../actions';

import { ADD_CLIP } from '../actionTypes';

describe('Videos / Actions', () => {
  let result;

  describe('addClip', () => {
    let clip, videoIndex;
    beforeAll(() => {
      clip = { name: 'Clip 1' };
      videoIndex = 'videoIndex';
      result = addClip(clip, videoIndex);
    });

    it('should return a ADD_CLIP action with the passed videoIndex', () =>
      expect(result).toEqual({
        type: ADD_CLIP,
        payload: { videoIndex, clip }
      }));
  });
});
