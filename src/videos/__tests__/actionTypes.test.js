import {
  ADD_CLIP,
  EDIT_CLIP,
  REMOVE_CLIP,
  SET_DURATION,
  CLIP_CHANGE,
  PAUSE_VIDEO,
  PLAY_VIDEO
} from '../actionTypes';

describe('Videos / ActionTypes', () => {
  describe('ADD_CLIP', () => {
    it('should equal "videos/ADD_CLIP"', () =>
      expect(ADD_CLIP).toEqual('videos/ADD_CLIP'));
  });

  describe('EDIT_CLIP', () => {
    it('should equal "videos/EDIT_CLIP"', () =>
      expect(EDIT_CLIP).toEqual('videos/EDIT_CLIP'));
  });

  describe('REMOVE_CLIP', () => {
    it('should equal "videos/REMOVE_CLIP"', () =>
      expect(REMOVE_CLIP).toEqual('videos/REMOVE_CLIP'));
  });

  describe('SET_DURATION', () => {
    it('should equal "videos/SET_DURATION"', () =>
      expect(SET_DURATION).toEqual('videos/SET_DURATION'));
  });

  describe('CLIP_CHANGE', () => {
    it('should equal "videos/CLIP_CHANGE"', () =>
      expect(CLIP_CHANGE).toEqual('videos/CLIP_CHANGE'));
  });

  describe('PAUSE_VIDEO', () => {
    it('should equal "videos/PAUSE_VIDEO"', () =>
      expect(PAUSE_VIDEO).toEqual('videos/PAUSE_VIDEO'));
  });

  describe('PLAY_VIDEO', () => {
    it('should equal "videos/PLAY_VIDEO"', () =>
      expect(PLAY_VIDEO).toEqual('videos/PLAY_VIDEO'));
  });
});
