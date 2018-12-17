import React, { Fragment } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import DeleteItemDialog from 'videos/components/DeleteItemDialog';
import EditItemDialog from 'videos/components/EditItemDialog';

const ClipItem = ({
  name,
  start,
  end,
  video,
  clipIndex,
  videoIndex,
  selected,
  setClip,
  deleting,
  editing,
  anchorEl,
  openMenu,
  closeMenu,
  deleteItem,
  openEditing,
  closeEditing,
  openDeleting,
  closeDeleting
}) => (
  <Fragment>
    <Divider component="li" />
    <ListItem button component="a" selected={selected}>
      <ListItemText
        primary={name}
        secondary={`${start} - ${end}`}
        onClick={setClip}
        clipindex={clipIndex}
      />
      <ListItemSecondaryAction>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'clipMenu' : undefined}
          aria-haspopup="true"
          onClick={openMenu}
        >
          <MoreVertIcon />
        </IconButton>
      </ListItemSecondaryAction>
      <Menu
        id="clipMenu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem onClick={openEditing}>Edit</MenuItem>
        <MenuItem onClick={openDeleting} color="secondary">
          <Typography color="secondary">
            Delete
          </Typography>
        </MenuItem>
      </Menu>
      <Dialog
        open={deleting}
        onClose={closeDeleting}
        aria-labelledby="deleteClipDialog"
        aria-describedby="deleteClipDialogDescription"
      >
        <DeleteItemDialog
          dialogTitle="deleteClipDialog"
          dialogDescription="deleteClipDialogDescription"
          end={end}
          name={name}
          start={start}
          onClose={closeDeleting}
          deleteItem={deleteItem}
        />
      </Dialog>
      <Dialog
        open={editing}
        onClose={closeEditing}
        aria-labelledby="editClipDialog"
      >
        <EditItemDialog
          dialogTitle="editClipDialog"
          end={end}
          name={name}
          start={start}
          video={video}
          clipIndex={clipIndex}
          videoIndex={videoIndex}
          closeEditing={closeEditing}
          closeMenu={closeMenu}
        />
      </Dialog>
    </ListItem>
  </Fragment>
);

export default ClipItem;
