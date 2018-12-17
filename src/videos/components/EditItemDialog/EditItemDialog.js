import React, { Fragment } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import ClipForm from 'videos/components/ClipForm';

const EditItemDialog = ({
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
    <DialogContent>
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

export default EditItemDialog
