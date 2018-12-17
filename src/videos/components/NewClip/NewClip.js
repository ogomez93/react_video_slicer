import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  rightIcon: {
    marginLeft: theme.spacing.unit,
  }
});

const NewClip = ({ classes, setAdding }) => (
  <Button
    color="primary"
    onClick={setAdding}
    variant="contained"
  >
    ADD NEW CLIP
    <AddIcon className={classes.rightIcon} />
  </Button>
);

export default withStyles(styles)(NewClip);
