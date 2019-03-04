import { getClipErrors, NAME_ERROR, TIME_ERROR } from '../validations';

const validName = 'this is a valid name';
const invalidName = '';

const validTime = { start: 10, end: 30 };
const startIsLessThanZero = { start: -1, end: 30 };
const startIsGreaterThanEnd = { start: 50, end: 10 };
const startIs100 = { start: 100, end: 101 };
const startIsMoreThan100 = { start: 101, end: 110 };
const endIsMoreThan100 = { start: 10, end: 101 };

// Valid edge cases

const startIsZero = { start: 0, end: 50 };
const endIs100 = { start: 20, end: 100 };
const startIsZeroAndEndIs100 = { start: 0, end: 100 };

describe('Videos / Components / ClipForm / utils / Validations / getClipErrors', () => {
  let result, values;

  describe('When all fields are valid', () => {
    beforeAll(() => {
      values = { ...validTime, name: validName };
      result = getClipErrors(values);
    });

    it('should return an empty object, meaning no errors', () =>
      expect(result).toEqual({}));
  });
  
  describe('When only name is invalid', () => {
    beforeAll(() => {
      values = { ...validTime, name: invalidName };
      result = getClipErrors(values);
    });

    it('should return an object with a name error', () =>
      expect(result).toEqual({ name: NAME_ERROR }));
  });

  describe('When time is invalid', () => {
    describe('When start is less than zero', () => {
      beforeAll(() => {
        values = { ...startIsLessThanZero, name: validName };
        result = getClipErrors(values);
      });

      it('should return an object with a time error', () =>
        expect(result).toEqual({ time: TIME_ERROR }));
    });

    describe('When start is greater than end', () => {
      beforeAll(() => {
        values = { ...startIsGreaterThanEnd, name: validName };
        result = getClipErrors(values);
      });

      it('should return an object with a time error', () =>
        expect(result).toEqual({ time: TIME_ERROR }));
    });

    describe('When start is 100', () => {
      beforeAll(() => {
        values = { ...startIs100, name: validName };
        result = getClipErrors(values);
      });

      it('should return an object with a time error', () =>
        expect(result).toEqual({ time: TIME_ERROR }));
    });

    describe('When start is more than 100', () => {
      beforeAll(() => {
        values = { ...startIsMoreThan100, name: validName };
        result = getClipErrors(values);
      });

      it('should return an object with a time error', () =>
        expect(result).toEqual({ time: TIME_ERROR }));
    });

    describe('When end is more than 100', () => {
      beforeAll(() => {
        values = { ...endIsMoreThan100, name: validName };
        result = getClipErrors(values);
      });

      it('should return an object with a time error', () =>
        expect(result).toEqual({ time: TIME_ERROR }));
    });
  });

  describe('Time edge cases', () => {
    describe('When start is zero', () => {
      beforeAll(() => {
        values = { ...startIsZero, name: validName };
        result = getClipErrors(values);
      });

      it('should return an empty object, meaning no errors', () =>
        expect(result).toEqual({}));
    });

    describe('When end is 100', () => {
      beforeAll(() => {
        values = { ...endIs100, name: validName };
        result = getClipErrors(values);
      });

      it('should return an empty object, meaning no errors', () =>
        expect(result).toEqual({}));
    });

    describe('When start is zero and end is 100', () => {
      beforeAll(() => {
        values = { ...startIsZeroAndEndIs100, name: validName };
        result = getClipErrors(values);
      });

      it('should return an empty object, meaning no errors', () =>
        expect(result).toEqual({}));
    });
  });
});
