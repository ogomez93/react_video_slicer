import { switchAutoPlay, turnAutoPlayOff, turnAutoPlayOn } from '../actions';
import { SWITCH, TURN_OFF, TURN_ON } from '../actionTypes';

describe('AutoPlay / Actions', () => {
  let result;

  describe('switchAutoPlay', () => {
    beforeAll(() => {
      result = switchAutoPlay();
    });

    it('should return an action object with type: SWITCH', () =>
      expect(result).toEqual({ type: SWITCH }));
  });

  describe('turnAutoPlayOff', () => {
    beforeAll(() => {
      result = turnAutoPlayOff();
    });

    it('should return an action object with type: TURN_OFF', () =>
      expect(result).toEqual({ type: TURN_OFF }));
  });

  describe('turnAutoPlayOn', () => {
    beforeAll(() => {
      result = turnAutoPlayOn();
    });

    it('should return an action object with type: TURN_ON', () =>
      expect(result).toEqual({ type: TURN_ON }));
  });
});
