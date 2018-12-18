import { TIME_PRECISION } from 'videos/constants';

const fixNumber = number => parseFloat(number.toFixed(TIME_PRECISION));
const formatToTime = number => number < 10 ? `0${number}` : `${number}`;

export const formatDuration = timeInSeconds => {
  const fixedTimeInSeconds = fixNumber(timeInSeconds);
  return fixedTimeInSeconds < 60
    ? `${timeInSeconds} seconds`
    : formatTime(fixedTimeInSeconds);
};

export const formatTime = timeInSeconds => {
  const minutes = formatToTime(parseInt(timeInSeconds / 60));
  const seconds = formatToTime(parseInt(timeInSeconds % 60));
  return `${minutes}:${seconds}`;
};
