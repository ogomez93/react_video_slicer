import { TIME_PRECISION } from 'videos/constants';

const fixNumber = number => parseFloat(number.toFixed(TIME_PRECISION));
const formatToTime = number => number < 10 ? `0${number}` : `${number}`;

export const formatDuration = timeInSeconds => {
  const fixedTimeInSeconds = fixNumber(timeInSeconds);
  return fixedTimeInSeconds < 60
    ? `${timeInSeconds} seconds`
    : formatTime(fixedTimeInSeconds);
};

export const formatTime = (percentage, duration = 100) => {
  if (isNaN(percentage)) return undefined;
  const time = parseFloat(percentage * duration / 100);
  const minutes = formatToTime(parseInt(time / 60));
  const seconds = formatToTime(parseInt(time % 60));
  return `${minutes}:${seconds}`;
};