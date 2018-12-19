import {
  clipText,
  formatDuration,
  formatTime,
  getClipsFromLocalStorage,
  percentageToSeconds,
  saveClipsToLocalStorage
} from '../index';

import { LOCAL_STORAGE_CLIPS_KEY } from 'videos/constants';

const clips = [{ name: 'clip 1' }, { name: 'clip 2' }];

describe('Videos / Utils / index', () => {
  let result;

  describe('clipText', () => {
    let name, tag;

    describe('when tag is an empty string', () => {
      beforeAll(() => {
        name = 'name';
        tag = '';
        result = clipText(name, tag);
      });

      it('should return the name', () =>
        expect(result).toEqual(name));
    });

    describe('when tag is not an empty string', () => {
      beforeAll(() => {
        name = 'name';
        tag = 'tag';
        result = clipText(name, tag);
      });

      it('should return "name (tag)"', () =>
        expect(result).toEqual(`${name} (${tag})`));
    });
  });

  describe('formatDuration', () => {
    let duration;

    describe('when time is less than 60 seconds', () => {
      beforeAll(() => {
        duration = 40;
        result = formatDuration(duration);
      });

      it('should return "[duration] seconds"', () =>
        expect(result).toEqual('40 seconds'));
    });

    describe('when time is more than 60 seconds', () => {
      beforeAll(() => {
        duration = 100;
        result = formatDuration(duration);
      });

      it('should return "[duration.minutes]:[duration.seconds]"', () =>
        expect(result).toEqual('01:40'));
    });
  });

  describe('formatTime', () => {
    let time;

    describe('if time is not a number', () => {
      beforeAll(() => {
        time = 'not a number';
        result = formatTime(time);
      });

      it('should return undefined', () =>
        expect(result).toEqual(undefined));
    });

    describe('if time is a number', () => {
      beforeAll(() => {
        time = 130;
        result = formatTime(time);
      });
  
      it('should return time (seconds) formatted to min:seconds', () =>
        expect(result).toEqual('02:10'));
    });
    
  });

  describe('getClipsFromLocalStorage', () => {
    beforeAll(() => {
      window.localStorage.clear();
    });

    afterAll(() => {
      window.localStorage.clear();
    });

    describe('when local storage does not contain any clips', () => {
      beforeAll(() => {
        result = getClipsFromLocalStorage();
      });

      it('should return undefined', () =>
        expect(result).toEqual(null));
    });
    
    describe('when local storage contains clips', () => {
      beforeAll(() => {
        window.localStorage.setItem(
          LOCAL_STORAGE_CLIPS_KEY,
          JSON.stringify(clips)
        );
        result = getClipsFromLocalStorage();
      });

      it('should return clips', () =>
        expect(result).toEqual(clips));
    });
  });

  describe('percentageToSeconds', () => {
    let percentage, duration;

    beforeAll(() => {
      percentage = 50; // 50%
      duration = 60; // 60 seconds
      result = percentageToSeconds(percentage, duration); // 30 seconds
    });

    it('should return the duration percentage', () =>
      expect(result).toEqual(30));
  });

  describe('saveClipsToLocalStorage', () => {
    beforeAll(() => {
      window.localStorage.clear();
      saveClipsToLocalStorage(clips);
    });

    afterAll(() => {
      window.localStorage.clear();
    });

    it('should set clips to localStorage', () =>
      expect(
        JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_CLIPS_KEY))
      ).toEqual(clips));
  });
});
