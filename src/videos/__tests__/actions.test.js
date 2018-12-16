import { setVideo } from '../actions';

import { SET_VIDEO } from '../actionTypes';

describe('Videos / Actions', () => {
  let result;

  describe('setVideo', () => {
    describe('when called without a videoUrl', () => {
      beforeAll(() => {
        result = setVideo();
      });

      it('should return a SET_VIDEO action with an empty videoUrl', () =>
        expect(result).toEqual({
          type: SET_VIDEO,
          payload: { videoUrl: '' }
        }));
    });

    describe('when called with a videoUrl', () => {
      let videoUrl;
      beforeAll(() => {
        videoUrl = 'videoUrl';
        result = setVideo(videoUrl);
      });

      it('should return a SET_VIDEO action with the passed videoUrl', () =>
        expect(result).toEqual({
          type: SET_VIDEO,
          payload: { videoUrl }
        }));
    });
  });
});
