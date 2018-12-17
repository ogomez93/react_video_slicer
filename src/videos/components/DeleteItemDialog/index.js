import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const DeleteItemDialog = ({
  dialogDescription,
  dialogTitle,
  end,
  name,
  start,
  onClose,
  deleteItem
}) => (
  <Fragment>
    <DialogTitle id={dialogTitle}>
      Are you sure you want to delete this clip?
    </DialogTitle>
    <DialogContent>
      <DialogContentText id={dialogDescription}>
        {`Name: '${name}', from ${start} to ${end}`}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Cancel
      </Button>
      <Button onClick={deleteItem} color="secondary">
        Delete
      </Button>
    </DialogActions>
  </Fragment>
);

export default DeleteItemDialog
