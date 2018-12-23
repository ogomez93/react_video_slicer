import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import NewClipContainer from '../index';

const initialState = { videos: [{ loading: false }] };

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('Videos / Components / NewClip / index', () => {
  let button, clipForm, closeClipForm, mount, props, wrapper;

  beforeAll(() => {
    mount = createMount();
  });

  describe('when user is not adding a new clip', () => {
    beforeAll(() => {
      props = { video: { loading: false } };
      wrapper = mount(
        <Provider store={store}>
          <NewClipContainer {...props} />
        </Provider>
      );
      button = wrapper.find('Button#addNewClipButton');
      clipForm = wrapper.find('ClipForm');
    });

    it('should render', () =>
      expect(wrapper.isEmptyRender()).toEqual(false));

    it('should render an "Add new clip" button', () =>
      expect(button).toHaveLength(1));

    it('should not render an "Add new clip" form', () =>
      expect(clipForm).toHaveLength(0));

    describe('when the user clicks the button', () => {
      beforeAll(() => {
        button.simulate('click');
        wrapper.update();
        button = wrapper.find('Button#addNewClipButton');
        clipForm = wrapper.find('ClipForm');
      });
      
      it('should not render an "Add new clip" button', () =>
        expect(button).toHaveLength(0));

      it('should render an "Add new clip" form', () =>
        expect(clipForm).toHaveLength(1));
    });
  });

  describe('when user is adding a new clip', () => {
    beforeAll(() => {
      props = { video: { loading: false } };
      wrapper = mount(
        <Provider store={store}>
          <NewClipContainer {...props} />
        </Provider>
      );
      button = wrapper.find('Button');
      button.simulate('click');
      wrapper.update();
      button = wrapper.find('Button#addNewClipButton');
      clipForm = wrapper.find('ClipForm');
      closeClipForm = clipForm.find('Button#closeClipForm');
    });

    it('should render', () =>
      expect(wrapper.isEmptyRender()).toEqual(false));

    it('should not render an "Add new clip" button', () =>
      expect(button).toHaveLength(0));

    it('should render an "Add new clip" form', () =>
      expect(clipForm).toHaveLength(1));

    describe('when the user clicks the button', () => {
      beforeAll(() => {
        closeClipForm.simulate('click');
        wrapper.update();
        button = wrapper.find('Button#addNewClipButton');
        clipForm = wrapper.find('ClipForm');
      });
      
      it('should render an "Add new clip" button', () =>
        expect(button).toHaveLength(1));

      it('should not render an "Add new clip" form', () =>
        expect(clipForm).toHaveLength(0));
    });
  });
});
