import { onFilterChange, onNameChange, onTagChange } from '../handlers';

const setFilter = jest.fn();
const setName = jest.fn();
const setTag = jest.fn();
const value = 'value';
const mockEvent = { target: { value } };

describe('Videos / Components / SearchBar / Utils / handlers', () => {
  describe('onFilterChange', () => {
    beforeAll(() => {
      setFilter.mockClear();
      onFilterChange(setFilter)(mockEvent);
    });

    afterAll(() => {
      setFilter.mockClear();
    });

    it('should have called "setFilter" once', () =>
      expect(setFilter).toHaveBeenCalledTimes(1));

    it('should have called "setFilter" with value', () =>
      expect(setFilter).toHaveBeenCalledWith(value));
  });

  describe('onNameChange', () => {
    beforeAll(() => {
      setFilter.mockClear();
      onNameChange({ setName })(mockEvent);
    });

    afterAll(() => {
      setFilter.mockClear();
    });

    it('should have called "setName" once', () =>
      expect(setName).toHaveBeenCalledTimes(1));

    it('should have called "setName" with value', () =>
      expect(setName).toHaveBeenCalledWith(value));
  });

  describe('onTagChange', () => {
    beforeAll(() => {
      setFilter.mockClear();
      onTagChange({ setTag })(mockEvent);
    });

    afterAll(() => {
      setFilter.mockClear();
    });

    it('should have called "setTag" once', () =>
      expect(setTag).toHaveBeenCalledTimes(1));

    it('should have called "setTag" with value', () =>
      expect(setTag).toHaveBeenCalledWith(value));
  });
});
