import videosReducer from '../reducer';

import {
  addClip,
  clipChange,
  editClip,
  pauseVideo,
  playVideo,
  removeAllClips,
  removeClip,
  setDuration
} from '../actions';

import { saveClipsToLocalStorage } from 'videos/utils';

jest.mock('videos/utils', () => ({
  saveClipsToLocalStorage: jest.fn(),
  getClipsFromLocalStorage: jest.fn(() => null)
}));

const clip1 = {
  name: 'clip 1',
  tag: 'tag',
  start: 10,
  end: 20
};
const clip2 = {
  name: 'clip 2',
  tag: 'tag',
  start: 20,
  end: 30
};
const clip3 = {
  name: 'clip 3',
  tag: '',
  start: 30,
  end: 40
};

const videoIndex = 0;

describe('Videos / Reducer', () => {
  let clipIndex, newState, state;

  describe('case: ADD_CLIP', () => {
    beforeAll(() => {
      saveClipsToLocalStorage.mockClear();
      state = [{ clips: [] }];
      newState = videosReducer(state, addClip(clip1, videoIndex));
    });

    it('should add the clip to the video clips', () =>
      expect(newState[videoIndex].clips).toEqual([clip1]));

    it('should have called saveClipsToLocalStorage with the new clips', () =>
      expect(saveClipsToLocalStorage).toHaveBeenCalledWith(
        newState[videoIndex].clips
      ));
  });

  describe('case: clipChange', () => {
    beforeAll(() => {
      state = [{}];
      newState = videosReducer(state, clipChange(videoIndex));
    });
    
    it('should set loading to true', () =>
      expect(newState[videoIndex].loading).toEqual(true));

    it('should pause the video', () =>
      expect(newState[videoIndex].paused).toEqual(true));
  });

  describe('case: editClip', () => {
    let newClip;

    beforeAll(() => {
      saveClipsToLocalStorage.mockClear();
      newClip = {
        name: 'new clip',
        tag: 'tag 2',
        start: 35,
        end: 45
      };
      clipIndex = 1;
      state = [{}];
      newState = videosReducer(state, editClip(newClip, clipIndex, videoIndex));
    });
    
    it('should edit the corresponding clip', () =>
      expect(newState[videoIndex].clips[clipIndex]).toEqual(newClip));

    it('should have called saveClipsToLocalStorage with the new clips', () =>
      expect(saveClipsToLocalStorage).toHaveBeenCalledWith(
        newState[videoIndex].clips
      ));
  });

  describe('case: pauseVideo', () => {
    beforeAll(() => {
      state = [{}];
      newState = videosReducer(state, pauseVideo(videoIndex));
    });
    
    it('should pause the video', () =>
      expect(newState[videoIndex].paused).toEqual(true));
  });

  describe('case: playVideo', () => {
    beforeAll(() => {
      state = [{}];
      newState = videosReducer(state, playVideo(videoIndex));
    });
    
    it('should play the video', () =>
      expect(newState[videoIndex].paused).toEqual(false));
  });

  describe('case: removeAllClips', () => {
    beforeAll(() => {
      saveClipsToLocalStorage.mockClear();
      state = [{ clips: [clip1, clip2, clip3] }];
      newState = videosReducer(state, removeAllClips(videoIndex));
    });
    
    it('should delete all the clips', () =>
      expect(newState[videoIndex].clips).toEqual([]));

    it('should have called saveClipsToLocalStorage with the new clips', () =>
      expect(saveClipsToLocalStorage).toHaveBeenCalledWith(
        newState[videoIndex].clips
      ));
  });

  describe('case: removeClip', () => {
    beforeAll(() => {
      saveClipsToLocalStorage.mockClear();
      state = [{ clips: [clip1, clip2, clip3] }];
      newState = videosReducer(state, removeClip(1, videoIndex));
    });
    
    it('should delete the selected the clip', () =>
      expect(newState[videoIndex].clips).toEqual([clip1, clip3]));

    it('should have called saveClipsToLocalStorage with the new clips', () =>
      expect(saveClipsToLocalStorage).toHaveBeenCalledWith(
        newState[videoIndex].clips
      ));
  });

  describe('case: setDuration', () => {
    let duration;

    beforeAll(() => {
      duration = 100;
      state = [{}];
      newState = videosReducer(state, setDuration(duration, videoIndex));
    });

    it('should have set the duration to the video', () =>
      expect(newState[videoIndex].duration).toEqual(duration));

    it('should have set video loading to false', () =>
      expect(newState[videoIndex].loading).toEqual(false));
  });
});
