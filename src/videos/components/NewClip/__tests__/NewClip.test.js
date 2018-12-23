import React from 'react';
import { createMount } from '@material-ui/core/test-utils';

import NewClip from '../NewClip';

const setAdding = jest.fn();

describe('Videos / Components / NewClip / NewClip', () => {
  let button, buttonProps, props, mount, wrapper;

  beforeAll(() => {
    mount = createMount();
  });

  describe('when video is loading', () => {
    beforeAll(() => {
      props = { video: { loading: true },setAdding };
      wrapper = mount(<NewClip {...props} />);
      button = wrapper.find('Button');
      buttonProps = button.props();
    });

    it('should render', () =>
      expect(wrapper.isEmptyRender()).toEqual(false));

    it('should render a button', () =>
      expect(button).toHaveLength(1));

    describe('Button', () => {
      it('should be disabled', () =>
        expect(buttonProps.disabled).toEqual(true));

      it('should have a "hidden" className', () =>
        expect(buttonProps.className).toEqual('NewClip-hidden-2'));
    });
  });

  describe('when video is not loading', () => {
    beforeAll(() => {
      props = { video: { loading: false },setAdding };
      wrapper = mount(<NewClip {...props} />);
      button = wrapper.find('Button');
      buttonProps = button.props();
    });

    it('should render', () =>
      expect(wrapper.isEmptyRender()).toEqual(false));

    it('should render a button', () =>
      expect(button).toHaveLength(1));

    describe('Button', () => {
      it('should not be disabled', () =>
        expect(buttonProps.disabled).toEqual(false));

      it('should not have a className', () =>
        expect(buttonProps.className).toEqual(''));
    });
  });
});
