const format = (num) => (num > 9 ? num : `0${num}`);
export const formatTime = (time) => {
  const getSeconds = time % 60;
  const minutes = time % 3600;
  const getMinutes = Math.floor(minutes / 60);
  const getHours = Math.floor(time / 3600);

  return `${format(getHours)} : ${format(getMinutes)} : ${format(getSeconds)}`;
};
