import {
  addClip,
  editClip,
  removeClip,
  setDuration
} from '../actions';

import {
  ADD_CLIP,
  EDIT_CLIP,
  REMOVE_CLIP,
  SET_DURATION
} from '../actionTypes';

describe('Videos / Actions', () => {
  let result;
  let clip, clipIndex, duration, videoIndex;

  describe('addClip', () => {
    beforeAll(() => {
      clip = { name: 'Clip 1' };
      videoIndex = 0;
      result = addClip(clip, videoIndex);
    });

    it('should return a ADD_CLIP action with the passed videoIndex', () =>
      expect(result).toEqual({
        type: ADD_CLIP,
        payload: { clip, videoIndex }
      }));
  });

  describe('editClip', () => {
    beforeAll(() => {
      clip = { name: 'Clip 1' };
      clipIndex = 0;
      videoIndex = 0;
      result = editClip(clip, clipIndex, videoIndex);
    });

    it('should return a EDIT_CLIP action with the passed clipIndex and videoIndex', () =>
      expect(result).toEqual({
        type: EDIT_CLIP,
        payload: { clip, clipIndex, videoIndex }
      }));
  });

  describe('removeClip', () => {
    beforeAll(() => {
      clipIndex = 0;
      videoIndex = 0;
      result = removeClip(clipIndex, videoIndex);
    });

    it('should return a REMOVE_CLIP action with the passed clipIndex and videoIndex', () =>
      expect(result).toEqual({
        type: REMOVE_CLIP,
        payload: { clipIndex, videoIndex }
      }));
  });

  describe('setDuration', () => {
    beforeAll(() => {
      duration = 100;
      videoIndex = 0;
      result = setDuration(duration, videoIndex);
    });

    it('should return a SET_DURATION action with the passed duration and videoIndex', () =>
      expect(result).toEqual({
        type: SET_DURATION,
        payload: { duration, videoIndex }
      }));
  });
});
