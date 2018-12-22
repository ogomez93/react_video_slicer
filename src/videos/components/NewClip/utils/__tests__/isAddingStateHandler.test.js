import { setAdding, setNotAdding } from '../isAddingStateHandler';

const setIsAdding = jest.fn();

describe('Videos / Components / NewClip / Utils / isAddingStateHandler', () => {
  describe('setAdding', () => {
    beforeAll(() => {
      setIsAdding.mockClear();
      setAdding({ setIsAdding })();
    });

    afterAll(() => {
      setIsAdding.mockClear();
    });

    it('should have called setIsAdding once', () =>
      expect(setIsAdding).toHaveBeenCalledTimes(1));

    it('should have called setIsAdding with true', () =>
      expect(setIsAdding).toHaveBeenCalledWith(true));
  });

  describe('setNotAdding', () => {
    beforeAll(() => {
      setIsAdding.mockClear();
      setNotAdding({ setIsAdding })();
    });

    afterAll(() => {
      setIsAdding.mockClear();
    });

    it('should have called setIsAdding once', () =>
      expect(setIsAdding).toHaveBeenCalledTimes(1));

    it('should have called setIsAdding with false', () =>
      expect(setIsAdding).toHaveBeenCalledWith(false));
  });
});
