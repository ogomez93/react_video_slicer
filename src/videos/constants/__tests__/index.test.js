import {
  DEFAULT_VIDEO_URL,
  LOCAL_STORAGE_CLIPS_KEY,
  TIME_PRECISION
} from '../index';

describe('Videos / Constants / index', () => {
  describe('DEFAULT_VIDEO_URL', () => {
    it('should match the snapshot', () =>
      expect(DEFAULT_VIDEO_URL).toMatchSnapshot());
  });

  describe('LOCAL_STORAGE_CLIPS_KEY', () => {
    it('should match the snapshot', () =>
      expect(LOCAL_STORAGE_CLIPS_KEY).toMatchSnapshot());
  });

  describe('TIME_PRECISION', () => {
    it('should match the snapshot', () =>
      expect(TIME_PRECISION).toMatchSnapshot());
  });
});
