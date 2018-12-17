import { compose, withHandlers } from 'recompose';

import EditItemDialog from './EditItemDialog';

import { onCancel } from './utils/handlers';

export default compose(
  withHandlers({ onCancel })
)(EditItemDialog);
