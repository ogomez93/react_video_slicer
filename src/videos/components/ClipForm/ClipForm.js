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
            spacing={16}
          >
            <Grid item xs={12} sm={6}>
              <TextField
                id="clipStart"
                label="From"
                className={classes.textField}
                value={start}
                onChange={onStartChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-end"
        >
          <Button className={classes.button} color="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button className={classes.button} color="primary" onClick={onSubmit}>
            Save
          </Button>
        </Grid>
      </Paper>
    </Grid>
  </form>
);

export default withStyles(styles)(ClipForm);
