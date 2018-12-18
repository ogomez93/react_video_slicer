import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

import { addClip, editClip } from 'videos/actions';
import { formatTime } from 'videos/utils';

import { clipErrors } from './utils/validations';

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
  slider: {
    padding: `${theme.spacing.unit}px 0px`,
  },
  textField: {
    width: '100%',
    margin: 0,
    marginBottom: theme.spacing.unit
  }
});

class ClipForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      end: props.end || 100,
      name: props.name || '',
      start: props.start || 0
    }
  }

  handleNameChange = ({ target: { value } }) =>
    this.setState({ name: value });

  handleStartChange = (event, start) => {
    const { end } = this.state;
    if (start >= end) start = end - 1;
    this.setState({ start });
  }

  handleEndChange = (event, end) => {
    const { start } = this.state;
    if (start >= end) end = start + 1;
    this.setState({ end });
  }

  onFocus = event => event.target.select();

  onSubmit = event => {
    event.preventDefault();

    const clip = this.state;
    const {
      clipIndex,
      dispatch,
      videoIndex,
      onCancel
    } = this.props;
    const errors = clipErrors(clip);

    if (errors.length === 0) {
      dispatch(
        isNaN(clipIndex)
          ? addClip(clip, videoIndex)
          : editClip(clip, clipIndex, videoIndex));
      onCancel && onCancel();
    } else {
      console.log(errors);
    }
  };

  render() {
    const {
      classes,
      video: { duration },
      clipIndex = '',
      videoIndex = '',
      onCancel,
    } = this.props;

    const { name, start, end } = this.state;

    return (
      <form onSubmit={this.onSubmit} clipindex={clipIndex} videoindex={videoIndex}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <TextField
              id="clipName"
              className={classes.textField}
              label="Clip name"
              margin="normal"
              name="name"
              onChange={this.handleNameChange}
              onFocus={this.onFocus}
              required
              value={name}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography id="startLabel">
              {`From ${formatTime(start, duration)}`}
            </Typography>
            <Slider
              id="clipStart"
              classes={{ container: classes.slider }}
              aria-labelledby="startLabel"
              min={0}
              max={100}
              name="start"
              onChange={this.handleStartChange}
              value={start}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography id="endLabel">
              {`To ${formatTime(end, duration)}`}
            </Typography>
            <Slider
              id="clipEnd"
              classes={{ container: classes.slider }}
              aria-labelledby="endLabel"
              min={0}
              max={100}
              name="end"
              onChange={this.handleEndChange}
              value={end}
            />
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
              onClick={this.onSubmit}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default compose(
  withStyles(styles),
  connect()
)(ClipForm);
