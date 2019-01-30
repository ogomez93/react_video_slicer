import React from 'react';
import { createMount } from '@material-ui/core/test-utils';

import NoVisibleClips from '../NoVisibleClips';

describe('Videos / Components / ClipList / NoVisibleClips', () => {
  let mount;
  let noVisibleClips, wrapper;

  beforeAll(() => {
    mount = createMount();
    wrapper = mount(<NoVisibleClips />);
    noVisibleClips = wrapper.find('NoVisibleClips');
  });

  it('should render', () =>
    expect(wrapper.isEmptyRender()).toEqual(false));

  it('should render a NoVisibleClips component', () =>
    expect(noVisibleClips.isEmptyRender()).toEqual(false));

  it('should render a descriptive text implying that the video is loading', () =>
    expect(noVisibleClips.text()).toEqual('No clips match those filters'));
});
