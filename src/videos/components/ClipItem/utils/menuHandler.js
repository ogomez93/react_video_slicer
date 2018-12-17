export const closeMenu = ({ setAnchorEl }) =>
  () => setAnchorEl(null);

export const openMenu = ({ setAnchorEl }) =>
  event => setAnchorEl(event.currentTarget);
