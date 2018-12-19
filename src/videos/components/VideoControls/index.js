import React, { Component, createRef } from 'react';
import { withStyles } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const styles = theme => ({
  container: {
    zIndex: 7000,
    position: 'absolute',
    width: '100%',
    height: '100%',
    transition: 'all 300ms'
  },
  content: {
    zIndex: 9000,
    width: '100%',
    height: '100%',
    opacity: 0
  },
  show: {
    opacity: .5,
  },
  playBackButtonContainer: {
    height: '20%',
    width: '12%',
    opacity: 1,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  playBackButton: {
    color: 'white',
    height: '100%',
    width: '100%',
    cursor: 'pointer'
  }
});

class VideoControls extends Component {
  constructor(props) {
    super(props);

    this.controlsContainerRef = createRef();
    this.controlsContentRef = createRef();
  }

  getControlsContainer = () => this.controlsContainerRef.current;
  getControlsContent = () => this.controlsContentRef.current;

  onMouseEnter = () => {
    this.getControlsContent().classList.add(this.props.classes.show);
  }
  onMouseLeave = () => {
    this.getControlsContent().classList.remove(this.props.classes.show);
  }

  render() {
    const {
      classes,
      video: { paused },
      onClick,
      // onDoubleClick
    } = this.props;

    return (
      <div
        ref={this.controlsContainerRef}
        className={classes.container}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div
          ref={this.controlsContentRef}
          className={classes.content}
          // onDoubleClick={onDoubleClick}
        >
          <div className={classes.playBackButtonContainer}>
            {
              paused ?
                <PlayArrowIcon
                  className={classes.playBackButton}
                  onClick={onClick}
                /> :
                <PauseIcon
                  className={classes.playBackButton}
                  onClick={onClick}
                />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(VideoControls)
