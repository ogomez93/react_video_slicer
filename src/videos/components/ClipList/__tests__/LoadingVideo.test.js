import React from 'react';
import { createMount } from '@material-ui/core/test-utils';

import LoadingVideo from '../LoadingVideo';

describe('Videos / Components / ClipList / LoadingVideo', () => {
  let mount;
  let loadingVideo, wrapper;

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(<LoadingVideo />);
    loadingVideo = wrapper.find('LoadingVideo');
  });

  it('should render', () =>
    expect(wrapper.isEmptyRender()).toEqual(false));

  it('should render a LoadingVideo component', () =>
    expect(loadingVideo.isEmptyRender()).toEqual(false));

  it('should render a descriptive text implying that the video is loading', () =>
    expect(loadingVideo.text()).toEqual('Please wait...'));
});
