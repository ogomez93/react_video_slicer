import React from 'react';
import { shallow } from 'enzyme';

import PlayPauseButton from '../index';

const clipIndex = 0;
const Icon = () => null;
const label = 'label';
const onClick = jest.fn();

const props = { clipIndex, Icon, label, onClick };

describe('Videos / Components / PlayPauseButton', () => {
  let wrapper, iconComponent;

  beforeAll(() => {
    wrapper = shallow(<PlayPauseButton {...props} />);
    iconComponent = wrapper.find('Icon');
  });

  it('should render', () =>
    expect(wrapper.isEmptyRender()).toEqual(false));

  it('should render the Icon prop', () =>
    expect(iconComponent.isEmptyRender()).toEqual(false));

  describe('component props', () => {
    let componentProps;

    beforeAll(() => {
      componentProps = wrapper.props();
    });

    describe('clipIndex', () => {
      it('should be the same as the "clipIndex" passed prop', () =>
        expect(componentProps.clipindex).toEqual(clipIndex));
    });

    describe('label', () => {
      it('should be the same as the "label" passed prop', () =>
        expect(componentProps['aria-label']).toEqual(label));
    });

    describe('onClick', () => {
      it('should be the same as the "onClick" passed prop', () =>
        expect(componentProps.onClick).toEqual(onClick));
    });
  });
});
