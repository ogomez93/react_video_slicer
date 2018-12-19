import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import AutoPlaySwitchContainer from '../index';

jest.mock('autoPlay/actions', () => ({
  switchAutoPlay: jest.fn()
}));

const initialState = { autoPlay: true };

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('AutoPlay / Components / Main', () => {
  let autoPlaySwitch, wrapper;

  beforeAll(() => {
    wrapper = mount(
      <Provider store={store}>
        <AutoPlaySwitchContainer />
      </Provider>
    );
    autoPlaySwitch = wrapper.find('AutoPlaySwitch');
  });

  it('should render', () =>
    expect(wrapper.isEmptyRender()).toEqual(false));

  it('should render an AutoPlaySwitch', () =>
    expect(autoPlaySwitch.isEmptyRender()).toEqual(false));

  describe('AutoPlaySwitch props', () => {
    let autoPlaySwitchProps;
    
    beforeAll(() => {
      autoPlaySwitchProps = autoPlaySwitch.props();
    });

    it('should have passed an "autoPlay" prop from the store', () =>
      expect(autoPlaySwitchProps.autoPlay).toEqual(initialState.autoPlay));

    it('should have passed a "switchAutoPlay" action', () =>
      expect(autoPlaySwitchProps.switchAutoPlay).toBeInstanceOf(Function));
  });
});
