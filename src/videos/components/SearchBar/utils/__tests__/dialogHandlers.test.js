import { closeDialog, openDialog } from '../dialogHandlers';

const setDeleteDialog = jest.fn();

describe('Videos / Components / SearchBar / Utils / dialogHandlers', () => {
  describe('closeDialog', () => {
    beforeAll(() => {
      setDeleteDialog.mockClear();
      closeDialog({ setDeleteDialog })();
    });

    afterAll(() => {
      setDeleteDialog.mockClear();
    });

    it('should have called "setDeleteDialog" once', () =>
      expect(setDeleteDialog).toHaveBeenCalledTimes(1));

    it('should have called "setDeleteDialog" with false', () =>
      expect(setDeleteDialog).toHaveBeenCalledWith(false));
  });

  describe('openDialog', () => {
    beforeAll(() => {
      setDeleteDialog.mockClear();
      openDialog({ setDeleteDialog })();
    });

    afterAll(() => {
      setDeleteDialog.mockClear();
    });

    it('should have called "setDeleteDialog" once', () =>
      expect(setDeleteDialog).toHaveBeenCalledTimes(1));

    it('should have called "setDeleteDialog" with true', () =>
      expect(setDeleteDialog).toHaveBeenCalledWith(true));
  });
});
