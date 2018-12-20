import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const DeleteAllItemsDialog = ({
  dialogDescription,
  dialogTitle,
  onClose,
  removeAllClips
}) => (
  <Fragment>
    <DialogTitle
      id={dialogTitle}
      testid="DeleteAllItemsDialog.dialogTitle"
    >
      Are you sure you want to delete all clips?
    </DialogTitle>
    <DialogContent>
      <DialogContentText
        id={dialogDescription}
        color="secondary"
        testid="DeleteAllItemsDialog.dialogContentText"
      >
        This action is not reversible
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={onClose}
        color="primary"
        testid="DeleteAllItemsDialog.closeButton"
      >
        Cancel
      </Button>
      <Button
        onClick={removeAllClips}
        color="secondary"
        testid="DeleteAllItemsDialog.deleteButton"
      >
        Delete
      </Button>
    </DialogActions>
  </Fragment>
);

export default DeleteAllItemsDialog
