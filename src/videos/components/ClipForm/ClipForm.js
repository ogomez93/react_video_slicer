import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
  paper: {
    padding: theme.spacing.unit * 2,
    minWidth: 412,
    [theme.breakpoints.down('sm')]: {
      minWidth: 300
    }
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
  onSubmit
}) => (
  <form onSubmit={onSubmit} clipindex={clipIndex} videoindex={videoIndex}>
    <Grid container spacing={16}>
      <Paper className={classes.paper}>
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
          <Grid
            alignItems="center"
            container
            justify="space-between"
          >
            <Grid item xs={12} sm={6}>
              <TextField
                id="clipStart"
                className={classes.textField}
                label="From"
                margin="normal"
                InputProps={{
                  inputProps: { min: 0, max: end }
                }}
                value={start || 0}
                type="number"
                onChange={onStartChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="clipEnd"
                className={classes.textField}
                label="To"
                margin="normal"
                InputProps={{
                  inputProps: { min: start, max: duration }
                }}
                value={end}
                type="number"
                onChange={onEndChange}
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
      </Paper>
    </Grid>
  </form>
);

export default withStyles(styles)(ClipForm);
