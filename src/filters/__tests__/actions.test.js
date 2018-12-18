import { emptyFilters, setFilters } from '../actions';
import { EMPTY_FILTERS, SET_FILTERS } from '../actionTypes';

describe('Videos / Actions', () => {
  let result;
  let nameFilter, tagFilter;

  describe('emptyFilters', () => {
    beforeAll(() => {
      result = emptyFilters();
    });

    it('should return a EMPTY_FILTERS action', () =>
      expect(result).toEqual({ type: EMPTY_FILTERS }));
  });

  describe('setFilters', () => {
    beforeAll(() => {
      nameFilter = 'nameFilter';
      tagFilter = 'tagFilter';
      result = setFilters(nameFilter, tagFilter);
    });

    it('should return a SET_FILTERS action with the corresponding filters', () =>
      expect(result).toEqual({
        type: SET_FILTERS,
        payload: { nameFilter, tagFilter }
      }));
  });
});
