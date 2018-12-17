import {
  SET_NAME_FILTER,
  SET_TAG_FILTER
} from '../actionTypes';

describe('Videos / ActionTypes', () => {
  describe('SET_NAME_FILTER', () => {
    it('should equal "filters/SET_NAME_FILTER"', () =>
      expect(SET_NAME_FILTER).toEqual('filters/SET_NAME_FILTER'));
  });

  describe('SET_TAG_FILTER', () => {
    it('should equal "filters/SET_TAG_FILTER"', () =>
      expect(SET_TAG_FILTER).toEqual('filters/SET_TAG_FILTER'));
  });
});
