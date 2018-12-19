import { getNameFilter, getTagFilter } from '../selectors';

const nameFilter = 'nameFilter';
const tagFilter = 'tagFilter';
const state = { filters: { nameFilter, tagFilter } };

describe('Filters / Selectors', () => {
  let result;

  describe('getNameFilter', () => {
    describe('when state contains nameFilter', () => {
      beforeAll(() => {
        result = getNameFilter(state);
      });

      it('should return the nameFilter', () =>
        expect(result).toEqual(nameFilter));
    });

    describe('when state contains filters but not nameFilter', () => {
      beforeAll(() => {
        result = getNameFilter({ filters: {} });
      });

      it('should return undefined', () =>
        expect(result).toEqual(undefined));
    });

    describe('when state does not contain filters', () => {
      beforeAll(() => {
        result = getNameFilter({});
      });

      it('should return undefined', () =>
        expect(result).toEqual(undefined));
    });
  });

  describe('getTagFilter', () => {
    describe('when state contains tagFilter', () => {
      beforeAll(() => {
        result = getTagFilter(state);
      });

      it('should return the tagFilter', () =>
        expect(result).toEqual(tagFilter));
    });

    describe('when state contains filters but not tagFilter', () => {
      beforeAll(() => {
        result = getTagFilter({ filters: {} });
      });

      it('should return undefined', () =>
        expect(result).toEqual(undefined));
    });

    describe('when state does not contain filters', () => {
      beforeAll(() => {
        result = getTagFilter({});
      });

      it('should return undefined', () =>
        expect(result).toEqual(undefined));
    });
  });
});
