import { EMPTY_FILTERS, SET_FILTERS } from './actionTypes';

import initialState from './constants/initialState';

const filters = (state = initialState, action) => {
  switch (action.type) {
    case EMPTY_FILTERS:
      return {
        ...state,
        nameFilter: '',
        tagFilter: ''
      }

    case SET_FILTERS:
      return {
        ...state,
        nameFilter: action.payload.nameFilter,
        tagFilter: action.payload.tagFilter
      }

    default:
      return state;
  }
}

export default filters;
