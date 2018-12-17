import { branch, compose, renderComponent, withHandlers } from 'recompose';

import NewClip from './NewClip';
import AddClipForm from 'videos/components/AddClipForm';

import { setAdding, setNotAdding } from './utils/isAddingStateHandler';
import withIsAddingState from './utils/withIsAddingState';

export default compose(
  withIsAddingState,
  withHandlers({ setAdding, setNotAdding }),
  branch(
    ({ isAdding }) => isAdding,
    renderComponent(AddClipForm)
  )
)(NewClip);
