export const getTimeString = (now) => {
  const hour = now.getHours();
  const minute = now.getMinutes();
  const seconds = now.getSeconds();
  return `${hour}:${minute}:${seconds}`;
};

const getNextYearDate = (now) => {
  const endOfYearDate = new Date(0);
  endOfYearDate.setUTCFullYear(now.getUTCFullYear() + 1);
  return endOfYearDate;
};

export const getSecondsLeftOfYear = (now) => {
  const startOfNextYear = getNextYearDate(now);
  const startOfNextYearMillis = startOfNextYear.getTime();
  const nowMillis = now.getTime();
  return Math.floor((startOfNextYearMillis - nowMillis) / 1000);
};

export const getMinutesLeftOfYear = (now) => {
  const currentDate = new Date();
  const endOfYearDate = getNextYearDate(now);

  const timeDifference = endOfYearDate - currentDate;

  const minutesLeft = (timeDifference / 60000).toFixed(2);

  return minutesLeft;
};
