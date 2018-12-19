import React from 'react';
import { mount } from 'enzyme';
import AutoPlaySwitch from '../AutoPlaySwitch';

const mockSwitchAutoPlay = jest.fn();

const props = {
  autoPlay: true,
  switchAutoPlay: mockSwitchAutoPlay
};

describe('AutoPlay / components / AutoPlaySwitch', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<AutoPlaySwitch {...props} />);
  });

  it('should render', () =>
    expect(wrapper.isEmptyRender()).toEqual(false));

  describe('Basic render', () => {
    let switchComponent;
    beforeAll(() => {
      switchComponent = wrapper.find('Switch');
    });

    it('should render a Switch component', () =>
      expect(switchComponent.isEmptyRender()).toEqual(false));

    describe('Switch component props', () => {
      let switchProps;
      beforeAll(() => {
        switchProps = switchComponent.props();
      });

      it('should have a "checked" prop', () =>
        expect(switchProps.checked).toEqual(props.autoPlay));

      it('should have a "color" prop', () =>
        expect(switchProps.color).toEqual('primary'));

      it('should have an "onChange" prop', () =>
        expect(switchProps.onChange).toEqual(mockSwitchAutoPlay));

      it('should have a "value" prop', () =>
        expect(switchProps.value).toEqual('autoPlay'));
    });
  });
});
