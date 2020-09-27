export const convertDaytoHrs = day => {
  let hours = day * 24;
  const hoursLength = hours.toString().length;
  //hours = hoursLength === 3 ? hours : '0' + hours;
  hours.toString().padStart(3, '0');
  return `${hours}:000:000`;
};

export const convertHrsToDay = data => {
  const time = data.split(':');
  const hours = time[0];
  return hours / 24;
};

export const convertHoursToHrs = hours => {
  return `${hours}:${m}:00`;
};

export const convertMinToHrs = minutes => {
  let h = Math.floor(minutes / 60);
  let m = minutes % 60;
  switch (h.toString().length) {
    case 1:
      h = '00' + h;
      break;
    case 2:
      h = '0' + h;
    default:
      h = h;
      break;
  }
  m = m < 10 ? '0' + m : m;
  return `${h}:0${m}:000`;
};

export const convertSecToHrs = seconds => {
  let s = seconds % 60;
  const totalMin = Math.floor(seconds / 60);
  let h, m;
  if (totalMin >= 60) {
    h = Math.floor(totalMin / 60);
    m = totalMin % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
  } else {
    h = 0;
    m = totalMin;
  }
  return `${h}:${m}:${s}`;
};

export const convertHrsToHours = data => {
  const time = data.split(':');
  return time[0];
};

export const convertHrsToMin = data => {
  const time = data.split(':');
  const h = parseInt(time[0]) * 60;
  const m = parseInt(time[1]);
  return h + m;
};

export const convertHrsToSec = data => {
  const time = data.split(':');
  const h = parseInt(time[0]) * 3600;
  const m = parseInt(time[1]) * 60;
  const s = parseInt(time[2]);
  return h + m + s;
};
