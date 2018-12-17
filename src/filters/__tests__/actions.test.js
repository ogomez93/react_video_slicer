import { setNameFilter, setTagFilter } from '../actions';
import { SET_NAME_FILTER, SET_TAG_FILTER } from '../actionTypes';

describe('Videos / Actions', () => {
  let result;
  let nameFilter, tagFilter;

  describe('setNameFilter', () => {
    beforeAll(() => {
      nameFilter = 'nameFilter';
      result = setNameFilter(nameFilter);
    });

    it('should return a SET_NAME_FILTER action with the corresponding nameFilter', () =>
      expect(result).toEqual({
        type: SET_NAME_FILTER,
        payload: { nameFilter }
      }));
  });

  describe('setTagFilter', () => {
    beforeAll(() => {
      tagFilter = 'tagFilter';
      result = setTagFilter(tagFilter);
    });

    it('should return a SET_TAG_FILTER action with the corresponding tagFilter', () =>
      expect(result).toEqual({
        type: SET_TAG_FILTER,
        payload: { tagFilter }
      }));
  });
});
