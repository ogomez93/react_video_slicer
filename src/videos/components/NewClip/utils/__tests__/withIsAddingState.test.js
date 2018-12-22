import React from 'react';
import { mount } from 'enzyme';

import withIsAddingState from '../withIsAddingState';

const EmptyComponent = () => null;

describe('Videos / Components / NewClip / Utils / withIsAddingState', () => {
  let emptyComponent, WrappedComponent, wrapper;

  beforeAll(() => {
    WrappedComponent = withIsAddingState(EmptyComponent);
    wrapper = mount(<WrappedComponent />);
    emptyComponent = wrapper.find('EmptyComponent');
  });

  it('should render', () =>
    expect(wrapper.isEmptyRender()).toEqual(false));

  describe('props', () => {
    describe('prop: isAdding', () => {
      it('should be its initial state: false', () =>
        expect(emptyComponent.prop('isAdding')).toEqual(false));
    });

    describe('prop: setIsAdding', () => {
      it('should be a function', () =>
        expect(emptyComponent.prop('setIsAdding')).toBeInstanceOf(Function));

      describe('when called', () => {
        beforeAll(() => {
          emptyComponent.props().setIsAdding(true);
          wrapper.update();
          emptyComponent = wrapper.find('EmptyComponent');
        });

        it('should change prop "isAdding" value', () =>
          expect(emptyComponent.prop('isAdding')).toEqual(true));
      });
    });
  });
});
