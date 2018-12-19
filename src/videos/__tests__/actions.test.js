import {
  addClip,
  editClip,
  removeClip,
  setDuration,
  clipChange,
  pauseVideo,
  playVideo
} from '../actions';

import {
  ADD_CLIP,
  EDIT_CLIP,
  REMOVE_CLIP,
  SET_DURATION,
  CLIP_CHANGE,
  PAUSE_VIDEO,
  PLAY_VIDEO
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

  describe('clipChange', () => {
    beforeAll(() => {
      videoIndex = 0;
      result = clipChange(videoIndex);
    });

    it('should return a CLIP_CHANGE action with the passed videoIndex', () =>
      expect(result).toEqual({
        type: CLIP_CHANGE,
        payload: { videoIndex }
      }));
  });

  describe('pauseVideo', () => {
    beforeAll(() => {
      videoIndex = 0;
      result = pauseVideo(videoIndex);
    });

    it('should return a PAUSE_VIDEO action with the passed videoIndex', () =>
      expect(result).toEqual({
        type: PAUSE_VIDEO,
        payload: { videoIndex }
      }));
  });

  describe('playVideo', () => {
    beforeAll(() => {
      videoIndex = 0;
      result = playVideo(videoIndex);
    });

    it('should return a PLAY_VIDEO action with the passed videoIndex', () =>
      expect(result).toEqual({
        type: PLAY_VIDEO,
        payload: { videoIndex }
      }));
  });
});
