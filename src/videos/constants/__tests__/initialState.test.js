import initialState from '../initialState';

describe('Videos / Constants / initialState', () => {
  it('should match the snapshot', () =>
    expect(initialState).toMatchSnapshot());
});
