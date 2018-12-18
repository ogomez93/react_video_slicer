import { SWITCH, TURN_ON, TURN_OFF } from './actionTypes';

export const switchAutoPlay = () => ({ type: SWITCH });
export const turnAutoPlayOn = () => ({ type: TURN_ON });
export const turnAutoPlayOff = () => ({ type: TURN_OFF });
