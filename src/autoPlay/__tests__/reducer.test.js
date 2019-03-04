import autoPlay from '../reducer';
import { SWITCH, TURN_OFF, TURN_ON } from '../actionTypes';

const mockSwitchAction = () => ({ type: SWITCH });
const mockTurnOffAction = () => ({ type: TURN_OFF });
const mockTurnOnAction = () => ({ type: TURN_ON });

describe('AutoPlay / Reducer', () => {
  let result, expectedNewState;

  describe('case: SWITCH', () => {
    describe('when autoPlay is false', () => {
      beforeAll(() => {
        result = autoPlay(false, mockSwitchAction());
        expectedNewState = true;
      });
      
      it('should return a new state with autoPlay being true', () =>
        expect(result).toEqual(expectedNewState));
    });
      
    describe('when autoPlay is true', () => {
      beforeAll(() => {
        result = autoPlay(true, mockSwitchAction());
        expectedNewState = false;
      });
      
      it('should return a new state with autoPlay being false', () =>
        expect(result).toEqual(expectedNewState));
    });
  });

  describe('case: TURN_OFF', () => {
    beforeAll(() => {
      expectedNewState = false;
    });

    describe('when autoPlay is false', () => {
      beforeAll(() => {
        result = autoPlay(false, mockTurnOffAction());
      });
      
      it('should return a new state with autoPlay being false', () =>
        expect(result).toEqual(expectedNewState));
    });
      
    describe('when autoPlay is true', () => {
      beforeAll(() => {
        result = autoPlay(true, mockTurnOffAction());
      });
      
      it('should return a new state with autoPlay being false', () =>
        expect(result).toEqual(expectedNewState));
    });
  });

  describe('case: TURN_ON', () => {
    beforeAll(() => {
      expectedNewState = true;
    });

    describe('when autoPlay is false', () => {
      beforeAll(() => {
        result = autoPlay(false, mockTurnOnAction());
      });
      
      it('should return a new state with autoPlay being true', () =>
        expect(result).toEqual(expectedNewState));
    });
      
    describe('when autoPlay is true', () => {
      beforeAll(() => {
        result = autoPlay(true, mockTurnOnAction());
      });
      
      it('should return a new state with autoPlay being true', () =>
        expect(result).toEqual(expectedNewState));
    });
  });
});
