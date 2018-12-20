import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import DeleteItemDialog from '../index';

const dialogDescription = 'dialogDescription';
const dialogTitle = 'dialogTitle';
const end = '00:48';
const name = 'name';
const start = '00:30';
const onClose = jest.fn();
const deleteItem = jest.fn();
const props = {
  dialogDescription,
  dialogTitle,
  end,
  name,
  start,
  onClose,
  deleteItem
}

describe('Videos / Components / DeleteItemDialog', () => {
  let wrapper, shallow;

  beforeAll(() => {
    shallow = createShallow();
    wrapper = shallow(<DeleteItemDialog {...props} />);
    console.log(wrapper.debug());
  });

  it('should render', () =>
    expect(wrapper.isEmptyRender()).toEqual(false));

  it('should match the snapshot', () =>
    expect(wrapper).toMatchSnapshot());
});
