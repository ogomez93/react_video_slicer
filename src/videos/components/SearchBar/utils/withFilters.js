import { withState } from 'recompose';

export const withName = withState('name', 'setName', '');
export const withTag = withState('tag', 'setTag', '');
