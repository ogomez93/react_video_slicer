import { withState } from 'recompose';

export const withEditDialogState = withState('editing', 'setEditing', false);
export const withDeleteDialogState = withState('deleting', 'setDeleting', false);
