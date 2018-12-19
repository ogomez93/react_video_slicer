import { SWITCH, TURN_OFF, TURN_ON } from '../actionTypes';

describe('AutoPlay / ActionTypes', () => {
  describe('SWITCH', () => {
    it('should equal "autoPlay/SWITCH"', () =>
      expect(SWITCH).toEqual('autoPlay/SWITCH'));
  });

  describe('TURN_OFF', () => {
    it('should equal "autoPlay/TURN_OFF"', () =>
      expect(TURN_OFF).toEqual('autoPlay/TURN_OFF'));
  });

  describe('TURN_ON', () => {
    it('should equal "autoPlay/TURN_ON"', () =>
      expect(TURN_ON).toEqual('autoPlay/TURN_ON'));
  });
});
