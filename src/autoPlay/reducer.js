import { SWITCH, TURN_ON, TURN_OFF } from './actionTypes';

const autoPlay = (state = false, action) => {
  switch (action.type) {
    case SWITCH:
      return !state

    case TURN_ON:
      return true

    case TURN_OFF:
      return false

    default:
      return state;
  }
}

export default autoPlay;
