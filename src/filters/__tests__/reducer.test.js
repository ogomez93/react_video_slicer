import filters from '../reducer';
import { emptyFilters, setFilters } from '../actions';

const initialState = {
  nameFilter: 'nameFilter',
  tagFilter: 'tagFilter'
};

const mockDefaultAction = () => ({ type: 'ANY_OTHER_ACTION' });

describe('Filters / Reducer', () => {
  let result, expectedNewState;

  describe('case: EMPTY_FILTERS', () => {
    beforeAll(() => {
      result = filters(initialState, emptyFilters());
      expectedNewState = { nameFilter: '', tagFilter: '' };
    });

    it('should turn all filters into empty strings', () =>
      expect(result).toEqual(expectedNewState));
  });

  describe('case: SET_FILTERS', () => {
    let newNameFilter, newTagFilter;

    beforeAll(() => {
      newNameFilter = 'new name filter';
      newTagFilter = 'new tag filter';
      result = filters(initialState, setFilters(newNameFilter, newTagFilter));
      expectedNewState = {
        nameFilter: newNameFilter,
        tagFilter: newTagFilter
      };
    });

    it('should set change filters to their new values', () =>
      expect(result).toEqual(expectedNewState));
  });

  describe('case: default', () => {
    let newNameFilter, newTagFilter;

    beforeAll(() => {
      newNameFilter = 'new name filter';
      newTagFilter = 'new tag filter';
      result = filters(initialState, mockDefaultAction(newNameFilter, newTagFilter));
    });

    it('should not change the state', () =>
      expect(result).toEqual(initialState));
  });
});
