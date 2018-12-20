import React from 'react';
import { shallow } from 'enzyme';

import DeleteAllItemsDialog from '../index';

const dialogDescription = 'dialogDescription';
const dialogTitle = 'dialogTitle';
const onClose = jest.fn();
const removeAllClips = jest.fn();

const props = {
  dialogDescription,
  dialogTitle,
  onClose,
  removeAllClips
};

describe('Videos / Components / DeleteAllItemsDialog', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<DeleteAllItemsDialog {...props} />);
  });

  it('should render', () =>
    expect(wrapper.isEmptyRender()).toEqual(false));

  describe('Dialog title', () => {
    let dialogTitle;

    beforeAll(() => {
      dialogTitle = wrapper.find({
        testid: 'DeleteAllItemsDialog.dialogTitle'
      });
    });

    it('should contain the dialog title', () =>
      expect(dialogTitle.html()).toContain('Are you sure you want to delete all clips?'));
  });

  describe('Dialog content text', () => {
    let dialogContentText;

    beforeAll(() => {
      dialogContentText = wrapper.find({
        testid: 'DeleteAllItemsDialog.dialogContentText'
      });
    });

    it('should contain the dialog content', () =>
      expect(dialogContentText.html()).toContain('This action is not reversible'));
  });

  describe('Close button', () => {
    let closeButton;

    beforeAll(() => {
      closeButton = wrapper.find({
        testid: 'DeleteAllItemsDialog.closeButton'
      });
    });

    it('should have an onClick prop, and it should equal onClose passed prop', () =>
      expect(closeButton.prop('onClick')).toEqual(onClose));

    it('should contain the button text', () =>
      expect(closeButton.html()).toContain('Cancel'));
  });

  describe('Delete button', () => {
    let deleteButton;

    beforeAll(() => {
      deleteButton = wrapper.find({
        testid: 'DeleteAllItemsDialog.deleteButton'
      });
    });

    it('should have an onClick prop, and it should equal removeAllClips passed prop', () =>
      expect(deleteButton.prop('onClick')).toEqual(removeAllClips));

    it('should contain the button text', () =>
      expect(deleteButton.html()).toContain('Delete'));
  });
});
