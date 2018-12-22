import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import VideoInfo from '../index';

const videoUrl = 'videoUrl';

describe('VideoInfo', () => {
  let shallow, props, videoInfo, wrapper;

  beforeAll(() => {
    shallow = createShallow();
  });

  describe('when props contain videoUrl', () => {
    beforeAll(() => {
      props = { video: { videoUrl } };
      wrapper = shallow(<VideoInfo {...props} />);
      videoInfo = wrapper.find('WithStyles(Typography)');
    });

    it('should render', () =>
      expect(wrapper.isEmptyRender()).toEqual(false));

    it('should render the video url', () =>
      expect(videoInfo.props().children).toEqual('videoUrl'));
  });

  describe('when props do not contain videoUrl', () => {
    beforeAll(() => {
      props = { video: {} };
      wrapper = shallow(<VideoInfo {...props} />);
      videoInfo = wrapper.find('WithStyles(Typography)');
    });

    it('should render', () =>
      expect(wrapper.isEmptyRender()).toEqual(false));

    it('should render an empty string', () =>
      expect(videoInfo.props().children).toEqual(''));
  });
});
