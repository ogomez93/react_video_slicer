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
      direction="row"
      justify="stretch"
      alignItems="stretch"
    >
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="searchNameBar"
            label="Search clips by name"
            className={classes.textField}
            value={name}
            onChange={onNameChange}
            margin="normal"
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            id="searchTagBar"
            label="Search clips by tag"
            className={classes.textField}
            value={tag}
            onChange={onTagChange}
            margin="normal"
          />
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
          onClick={onReset}
        >
          Reset filters
        </Button>
        <Button
          className={classes.button}
          color="primary"
          type="submit"
          onClick={onSubmit}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  </form>
);

export default withStyles(styles)(SearchBar)
