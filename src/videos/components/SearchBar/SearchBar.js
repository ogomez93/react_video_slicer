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
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  textField: {
    width: '100%',
    margin: 0
  },
});

const SearchBar = ({
  classes,
  disabled,
  name,
  tag,
  onNameChange,
  onTagChange,
  onSubmit,
  onReset
}) => (
  <form className={classes.container} autoComplete="off" onSubmit={onSubmit}>
    <Grid
      container
      alignItems="stretch"
      direction="row"
    >
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="searchNameBar"
            className={classes.textField}
            disabled={disabled}
            label="Search clips by name"
            margin="normal"
            onChange={onNameChange}
            value={name}
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            id="searchTagBar"
            className={classes.textField}
            disabled={disabled}
            label="Search clips by tag"
            margin="normal"
            onChange={onTagChange}
            value={tag}
          />
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="flex-end"
        direction="row"
        justify="flex-end"
      >
        <Button
          className={classes.button}
          disabled={disabled}
          onClick={onReset}
        >
          Reset filters
        </Button>
        <Button
          className={classes.button}
          color="primary"
          disabled={disabled}
          onClick={onSubmit}
          type="submit"
        >
          Search
        </Button>
      </Grid>
    </Grid>
  </form>
);

export default withStyles(styles)(SearchBar)
