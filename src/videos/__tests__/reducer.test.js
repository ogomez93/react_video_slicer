import videos from '../reducer';
import {
  ADD_CLIP,
  EDIT_CLIP,
  REMOVE_CLIP,
  SET_DURATION
} from '../actionTypes';

import initialState from '../constants/initialState';

const clip = {};

const addClipAction = {
  type: ADD_CLIP,
  payload: {
    videoIndex: 0,
    clip
  }
};

// describe('Videos / Reducer', () => {
//   let result, newState;

//   describe('case: ADD_CLIP', () => {
    
//   });
// });