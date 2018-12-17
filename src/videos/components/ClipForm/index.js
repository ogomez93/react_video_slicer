import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import ClipForm from './ClipForm';

import {
  onEndChange,
  onNameChange,
  onStartChange,
  onSubmit
} from './utils/formHandlers';
import {
  withEndState,
  withNameState,
  withStartState
} from './utils/withFormState';

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit: onSubmit(dispatch, props)
});

export default compose(
  withEndState,
  withNameState,
  withStartState,
  withHandlers({ onEndChange, onNameChange, onStartChange }),
  connect(null, mapDispatchToProps)
)(ClipForm)
