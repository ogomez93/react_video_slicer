import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import AddClipForm from '../index';

describe('Videos / Components / AddClipForm', () => {
  let shallow;
  let wrapper;

  beforeAll(() => {
    shallow = createShallow();
    wrapper = shallow(<AddClipForm />);
  });

  it('should render', () =>
    expect(wrapper.isEmptyRender()).toEqual(false));

  it('should have passed the prop "onCancel"', () =>
    expect(wrapper.prop('onCancel')).toBeInstanceOf(Function));
});
