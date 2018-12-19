import { getAutoPlay } from '../selectors';

describe('AutoPlay / Selectors', () => {
  let state, result;

  describe('getAutoPlay', () => {
    describe('if autoPlay key is true', () => {
      beforeAll(() => {
        state = { autoPlay: true };
        result = getAutoPlay(state);
      });
  
      it("should return the state's autoPlay value", () =>
        expect(result).toEqual(state.autoPlay));
    });

    describe('if autoPlay key is false', () => {
      beforeAll(() => {
        state = { autoPlay: false };
        result = getAutoPlay(state);
      });
  
      it("should return the state's autoPlay value", () =>
        expect(result).toEqual(state.autoPlay));
    });
    
    describe('if autoPlay key is not defined', () => {
      beforeAll(() => {
        state = {};
        result = getAutoPlay(state);
      });
  
      it("should return the selector's default value (false)", () =>
        expect(result).toEqual(false));
    });
  });
});
