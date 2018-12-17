export const onCancel = ({ closeEditing, closeMenu }) => () => {
  closeEditing && closeEditing();
  closeMenu && closeMenu();
};
