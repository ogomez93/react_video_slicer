import React, { Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ClipItem = ({
  name,
  start,
  end,
  anchorEl,
  openMenu,
  closeMenu,
  // editItem,
  deleteItem
}) => (
  <Fragment>
    <Divider component="li" />
    <ListItem>
      <ListItemText
        primary={name}
        secondary={`${start} - ${end}`}
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
        <MenuItem onClick={closeMenu}>Edit</MenuItem>
        <MenuItem onClick={deleteItem}>Delete</MenuItem>
      </Menu>
    </ListItem>
  </Fragment>
);

export default ClipItem;
