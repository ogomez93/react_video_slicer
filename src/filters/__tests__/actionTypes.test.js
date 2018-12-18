import { EMPTY_FILTERS, SET_FILTERS } from '../actionTypes';

describe('Videos / ActionTypes', () => {
  describe('SET_FILTERS', () => {
    it('should equal "filters/SET_FILTERS"', () =>
      expect(SET_FILTERS).toEqual('filters/SET_FILTERS'));
  });

  describe('EMPTY_FILTERS', () => {
    it('should equal "filters/EMPTY_FILTERS"', () =>
      expect(EMPTY_FILTERS).toEqual('filters/EMPTY_FILTERS'));
  });
});
