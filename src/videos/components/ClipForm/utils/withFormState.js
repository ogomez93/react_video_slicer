import { withState } from 'recompose';

export const withEndState = withState(
  'end',
  'setEnd',
  ({ end, video: { duration } }) => end || parseFloat(duration)
);

export const withNameState = withState(
  'name',
  'setName',
  ({ name = '' }) => name
);

export const withStartState = withState(
  'start',
  'setStart',
  ({ start = 0 }) => start
);
