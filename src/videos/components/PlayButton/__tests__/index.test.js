import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import PlayButton from '../index';

const videoIndex = 0;
const setClip = jest.fn();

const initialState = {};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('Videos / Components / PlayButton', () => {
  let buttonProps, props, playPauseButton, wrapper;

  describe('when prop "selected" is true', () => {
    beforeAll(() => {
      props = { videoIndex, setClip, selected: false };
      wrapper = mount(
        <Provider store={store}>
          <PlayButton {...props} />
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

      describe('selected', () => {
        it('should be the passed prop "selected"', () =>
          expect(buttonProps.selected).toEqual(false));
      });

      describe('label', () => {
        it('should be "Play"', () =>
          expect(buttonProps.label).toEqual('Play'));
      });

      describe('onClick', () => {
        it('should be the passed prop "setClip"', () =>
          expect(buttonProps.onClick).toEqual(setClip));
      });

      describe('Icon', () => {
        it('should be PlayArrowIcon', () =>
          expect(buttonProps.Icon).toEqual(PlayArrowIcon));
      });
    });
  });

  describe('when prop "selected" is false', () => {
    beforeAll(() => {
      props = { videoIndex, setClip, selected: true };
      wrapper = mount(
        <Provider store={store}>
          <PlayButton {...props} />
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

      describe('selected', () => {
        it('should be the passed prop "selected"', () =>
          expect(buttonProps.selected).toEqual(true));
      });

      describe('label', () => {
        it('should be "Play"', () =>
          expect(buttonProps.label).toEqual('Play'));
      });

      describe('onClick', () => {
        it('should not be passed prop "setClip"', () =>
          expect(buttonProps.onClick).not.toEqual(setClip));
      });

      describe('Icon', () => {
        it('should be PlayArrowIcon', () =>
          expect(buttonProps.Icon).toEqual(PlayArrowIcon));
      });
    });
  });
});
