import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import ClipForm from 'videos/components/ClipForm';

const styles = () => ({
  dialogContent: {
    overflow: 'hidden'
  }
});

const EditItemDialog = ({
  classes,
  dialogTitle,
  end,
  name,
  start,
  clipIndex,
  videoIndex,
  video,
  onCancel
}) => (
  <Fragment>
    <DialogTitle id={dialogTitle}>
      Editing clip
    </DialogTitle>
    <DialogContent className={classes.dialogContent}>
      <ClipForm
        end={end}
        name={name}
        start={start}
        video={video}
        clipIndex={clipIndex}
        videoIndex={videoIndex}
        onCancel={onCancel}
      />
    </DialogContent>
  </Fragment>
);

export default withStyles(styles)(EditItemDialog);
