import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = () => ({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  textField: {
    width: '100%',
    margin: 0
  },
});

const SearchBar = ({ classes, name, onNameChange, onSubmit }) => (
  <form className={classes.container} autoComplete="off" onSubmit={onSubmit}>
    <TextField
      id="searchBar"
      label="Search clips by name"
      className={classes.textField}
      value={name}
      onChange={onNameChange}
      margin="normal"
    />
  </form>
);

export default withStyles(styles)(SearchBar)
