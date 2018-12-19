import {
  getAllVideos,
  getSelectedClip,
  getSelectedVideo,
  getSelectedVideoClips,
  getSelectedVideoIndex,
  getVideoDuration
} from '../selectors';

const duration = 72.543;
const loading = false;
const paused = true;
const videoUrl = 'videoUrl';
const clip1 = { name: 'clip 1' };
const clip2 = { name: 'clip 2' };
const clip3 = { name: 'clip 3' };
const clips = [clip1, clip2, clip3];
const video1 = {
  duration,
  loading,
  paused,
  videoUrl,
  clips
};

const state = { videos: [ video1 ] };

describe('Videos / Selectors / selectors', () => {
  let result, props;

  describe('getAllVideos', () => {
    beforeAll(() => {
      result = getAllVideos(state);
    });

    it('should return the state videos key', () =>
      expect(result).toEqual(state.videos));
  });

  describe('getSelectedClip', () => {
    beforeAll(() => {
      props = { videoIndex: 0, clipIndex: 1 }
      result = getSelectedClip(state, props);
    });

    it('should return the selected clip', () =>
      expect(result).toEqual(clip2));
  });

  describe('getSelectedVideo', () => {
    beforeAll(() => {
      props = { videoIndex: 0 }
      result = getSelectedVideo(state, props);
    });

    it('should return the selected video', () =>
      expect(result).toEqual(video1));
  });

  describe('getSelectedVideoClips', () => {
    beforeAll(() => {
      props = { videoIndex: 0 }
      result = getSelectedVideoClips(state, props);
    });

    it('should return the selected video clips', () =>
      expect(result).toEqual(clips));
  });

  describe('getSelectedVideoIndex', () => {
    beforeAll(() => {
      props = { videoUrl }
      result = getSelectedVideoIndex(state, props);
    });

    it('should return the selected video index', () =>
      expect(result).toEqual(0));
  });

  describe('getSelectedVideoIndex', () => {
    beforeAll(() => {
      props = { videoIndex: 0 }
      result = getVideoDuration(state, props);
    });

    it('should return the selected video duration', () =>
      expect(result).toEqual(duration));
  });
});
