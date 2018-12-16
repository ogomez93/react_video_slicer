import { SET_NAME_FILTER, SET_TAG_FILTER } from './actionTypes';

import initialState from './constants/initialState';

const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          nameFilter: action.payload.nameFilter
        }
      }

    case SET_TAG_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          tagFilter: action.payload.tagFilter
        }
      }

    default:
      return state;
  }
}

export default filters;
