import {
  ADD_CLIP,
  EDIT_CLIP,
  REMOVE_CLIP,
  SET_DURATION
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
});
