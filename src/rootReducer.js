import { combineReducers } from 'redux';

import videos from 'videos/reducer';
import filters from 'filters/reducer';

const rootReducer = combineReducers({ filters, videos });

export default rootReducer;
