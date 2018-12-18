import { compose, withHandlers } from 'recompose';

import ClipForm from 'videos/components/ClipForm';

import { onCancel } from './utils/handlers';

export default compose(
  withHandlers({ onCancel })
)(ClipForm);
