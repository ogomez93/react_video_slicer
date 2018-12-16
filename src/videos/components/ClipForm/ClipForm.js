import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/Grid';

const styles = () => ({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  textField: {
    width: '100%',
    margin: 0
  }
});

const ClipForm = ({
  classes,
  end,
  name = '',
  start = 0,
  clipIndex = '',
  videoIndex = '',
  onEndChange,
  onNameChange,
  onStartChange,
  onCancel,
  onSubmit
}) => (
  <form onSubmit={onSubmit} clipindex={clipIndex} videoindex={videoIndex}>
    <Grid container>
      <Grid item xs={12}>
        <TextField
          id="clipName"
          label="Clip name"
          className={classes.textField}
          value={name}
          onChange={onNameChange}
          margin="normal"
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item>
            <TextField
              id="clipStart"
              label="From"
              className={classes.textField}
              value={start}
              onChange={onStartChange}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <TextField
              id="clipEnd"
              label="To"
              className={classes.textField}
              value={end}
              onChange={onEndChange}
              margin="normal"
            />
          </Grid>
        </Grid>
      </Grid>
      <Button color="secondary" onClick={onCancel}>
        Cancel
      </Button>
      <Button color="primary" onClick={onSubmit}>
        Save
      </Button>
    </Grid>
  </form>
);

export default withStyles(styles)(ClipForm);
