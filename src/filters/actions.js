import { SET_NAME_FILTER, SET_TAG_FILTER } from './actionTypes';

export const setNameFilter = nameFilter => ({
  type: SET_NAME_FILTER,
  payload: {
    nameFilter
  }
});

export const setTagFilter = tagFilter => ({
  type: SET_TAG_FILTER,
  payload: {
    tagFilter
  }
});
