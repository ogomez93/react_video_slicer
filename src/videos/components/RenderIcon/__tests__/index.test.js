import React from 'react';
import { shallow } from 'enzyme';

import RenderIcon from '../index';

const clipIndex = 0;
const setClip = jest.fn();
const videoIndex = 0;

describe('Videos / Components / RenderIcon', () => {
  let props, wrapper;

  describe('When item is selected and video is loading', () => {
    beforeAll(() => {
      props = {
        selected: true,
        video: { loading: true },
        clipIndex,
        setClip,
        videoIndex
      };
      wrapper = shallow(<RenderIcon {...props} />);
    });

    it('should render', () =>
      expect(wrapper.isEmptyRender()).toEqual(false));

    it('should a CircularProgress component', () =>
      expect(wrapper.name()).toEqual('WithStyles(CircularProgress)'));
  });

  describe('When item is selected and video is not paused', () => {
    beforeAll(() => {
      props = {
        selected: true,
        video: { paused: false },
        clipIndex,
        setClip,
        videoIndex
      };
      wrapper = shallow(<RenderIcon {...props} />);
    });

    it('should render', () =>
      expect(wrapper.isEmptyRender()).toEqual(false));

    it('should a PauseButton component', () =>
      expect(wrapper.prop('testid')).toEqual('RenderIcon.PauseButton'));

    describe('component props', () => {
      let componentProps;

      beforeAll(() => {
        componentProps = wrapper.props();
      });

      describe('clipIndex', () => {
        it('should equal the passed prop clipIndex', () =>
          expect(componentProps.clipIndex).toEqual(clipIndex));
      });

      describe('selected', () => {
        it('should equal the passed prop selected', () =>
          expect(componentProps.selected).toEqual(true));
      });

      describe('setClip', () => {
        it('should equal the passed prop setClip', () =>
          expect(componentProps.setClip).toEqual(setClip));
      });

      describe('videoIndex', () => {
        it('should equal the passed prop videoIndex', () =>
          expect(componentProps.videoIndex).toEqual(videoIndex));
      });
    });
  });

  describe('When item is selected and video is paused', () => {
    beforeAll(() => {
      props = {
        selected: true,
        video: { paused: true },
        clipIndex,
        setClip,
        videoIndex
      };
      wrapper = shallow(<RenderIcon {...props} />);
    });

    it('should render', () =>
      expect(wrapper.isEmptyRender()).toEqual(false));

    it('should a PlayButton component', () =>
      expect(wrapper.prop('testid')).toEqual('RenderIcon.PlayButton'));

    describe('component props', () => {
      let componentProps;

      beforeAll(() => {
        componentProps = wrapper.props();
      });

      describe('clipIndex', () => {
        it('should equal the passed prop clipIndex', () =>
          expect(componentProps.clipIndex).toEqual(clipIndex));
      });

      describe('selected', () => {
        it('should equal the passed prop selected', () =>
          expect(componentProps.selected).toEqual(true));
      });

      describe('setClip', () => {
        it('should equal the passed prop setClip', () =>
          expect(componentProps.setClip).toEqual(setClip));
      });

      describe('videoIndex', () => {
        it('should equal the passed prop videoIndex', () =>
          expect(componentProps.videoIndex).toEqual(videoIndex));
      });
    });
  });

  describe('When item is not selected', () => {
    beforeAll(() => {
      props = {
        selected: false,
        clipIndex,
        setClip,
        videoIndex
      };
      wrapper = shallow(<RenderIcon {...props} />);
    });

    it('should render', () =>
      expect(wrapper.isEmptyRender()).toEqual(false));

    it('should a PlayButton component', () =>
      expect(wrapper.prop('testid')).toEqual('RenderIcon.PlayButton'));

    describe('component props', () => {
      let componentProps;

      beforeAll(() => {
        componentProps = wrapper.props();
      });

      describe('clipIndex', () => {
        it('should equal the passed prop clipIndex', () =>
          expect(componentProps.clipIndex).toEqual(clipIndex));
      });

      describe('selected', () => {
        it('should equal the passed prop selected', () =>
          expect(componentProps.selected).toEqual(false));
      });

      describe('setClip', () => {
        it('should equal the passed prop setClip', () =>
          expect(componentProps.setClip).toEqual(setClip));
      });

      describe('videoIndex', () => {
        it('should equal the passed prop videoIndex', () =>
          expect(componentProps.videoIndex).toEqual(videoIndex));
      });
    });
  });
});
