import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  container: {
    ...theme.mixins.gutters(),
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: theme.spacing.unit * 2
  },
  textField: {
    width: '100%',
    margin: 0,
    marginBottom: theme.spacing.unit
  }
});

const ClipForm = ({
  classes,
  name,
  start,
  video: { duration },
  end,
  clipIndex = '',
  videoIndex = '',
  onEndChange,
  onNameChange,
  onStartChange,
  onCancel,
  onFocus,
  onSubmit
}) => (
  <form onSubmit={onSubmit} clipindex={clipIndex} videoindex={videoIndex}>
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <TextField
          id="clipName"
          className={classes.textField}
          label="Clip name"
          margin="normal"
          onChange={onNameChange}
          onFocus={onFocus}
          value={name}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid
          alignItems="center"
          container
          justify="space-between"
        >
          <Grid item xs={12} sm={6}>
            <TextField
              id="clipStart"
              className={classes.textField}
              InputProps={{
                inputProps: { min: 0, max: end }
              }}
              label="From"
              margin="normal"
              onChange={onStartChange}
              onFocus={onFocus}
              type="number"
              value={start}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="clipEnd"
              className={classes.textField}
              InputProps={{
                inputProps: { min: start, max: duration }
              }}
              label="To"
              margin="normal"
              onFocus={onFocus}
              onChange={onEndChange}
              value={end}
              type="number"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-end"
      >
        <Button
          className={classes.button}
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          className={classes.button}
          color="primary"
          type="submit"
          onClick={onSubmit}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  </form>
);

export default withStyles(styles)(ClipForm);
