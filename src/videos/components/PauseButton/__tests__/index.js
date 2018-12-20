import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PauseIcon from '@material-ui/icons/Pause';

import PauseButton from '../index';

const videoIndex = 0;
const setClip = jest.fn();

const initialState = {};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('Videos / Components / PauseButton', () => {
  let buttonProps, props, playPauseButton, wrapper;

  beforeAll(() => {
    props = { videoIndex, setClip };
    wrapper = mount(
      <Provider store={store}>
        <PauseButton {...props} />
      </Provider>
    );
    playPauseButton = wrapper.find('PlayPauseButton');
  });

  it('should render', () =>
    expect(wrapper.isEmptyRender()).toEqual(false));

  describe('PlayPauseButton props', () => {
    beforeAll(() => {
      buttonProps = playPauseButton.props();
    });

    describe('videoIndex', () => {
      it('should be the passed videoIndex', () =>
        expect(buttonProps.videoIndex).toEqual(videoIndex));
    });

    describe('label', () => {
      it('should be "Pause"', () =>
        expect(buttonProps.label).toEqual('Pause'));
    });

    describe('onClick', () => {
      it('should be a function', () =>
        expect(buttonProps.onClick).toBeInstanceOf(Function));
    });

    describe('Icon', () => {
      it('should be PauseIcon', () =>
        expect(buttonProps.Icon).toEqual(PauseIcon));
    });
  });
});
