import { compose, withHandlers } from 'recompose';

import ClipForm from './ClipForm';

import {
  onEndChange,
  onNameChange,
  onStartChange
} from './utils/formHandlers';
import {
  withEndState,
  withNameState,
  withStartState
} from './utils/withFormState';

export default compose(
  withEndState,
  withNameState,
  withStartState,
  withHandlers({ onEndChange, onNameChange, onStartChange })
)(ClipForm)
