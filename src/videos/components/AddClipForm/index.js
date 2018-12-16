import { compose, withHandlers } from 'recompose';

import ClipForm from 'videos/components/ClipForm';

import { onCancel, onSubmit } from './utils/handlers';

export default compose(
  withHandlers({ onCancel, onSubmit })
)(ClipForm)
