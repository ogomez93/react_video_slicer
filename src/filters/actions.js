import { EMPTY_FILTERS, SET_FILTERS } from './actionTypes';

export const emptyFilters = () => ({
  type: EMPTY_FILTERS
});

export const setFilters = (nameFilter = '', tagFilter = '') => ({
  type: SET_FILTERS,
  payload: {
    nameFilter,
    tagFilter
  }
});
