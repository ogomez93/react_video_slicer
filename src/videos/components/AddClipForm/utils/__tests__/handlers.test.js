import { onCancel } from '../handlers';

const setNotAdding = jest.fn();
const props = { setNotAdding };

describe('Videos / Components / AddClipForm / utils / handlers', () => {
  beforeAll(() => {
    onCancel(props)();
  });

  it('should have called setNotAdding once', () =>
    expect(setNotAdding).toHaveBeenCalledTimes(1));
});
