import { withState } from 'recompose';

export const withEndState = withState('end', 'setEnd', ({ end = '' }) => end);
export const withNameState = withState('name', 'setName', ({ name = '' }) => name);
export const withStartState = withState('start', 'setStart', ({ start = '' }) => start);
