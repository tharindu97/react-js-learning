/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-globals */
import { months } from 'constants/DateTime';

export const utcToObj = (utc) => {
  if (!utc || typeof utc !== 'string') {
    return null;
  }
  const utcFilled = `${utc.replace(' ', 'T')}Z`;
  const date = new Date(utcFilled);

  if (date instanceof Date && !isNaN(date)) {
    return {
      year: date.getFullYear(),
      month: months[date.getMonth()],
      date: date.getDate(),
      minutes: date.getMinutes(),
      hours: date.getHours() % 12,
      phase: date.getHours() > 12 ? 'PM' : 'AM',
    };
  }

  return null;
};

export const toDateString = (lang, utc) => {
  const dateObj = utcToObj(utc);
  if (dateObj) {
    return `${dateObj.date} ${lang(dateObj.month)} ${dateObj.year}`;
  }
  return '';
};

export const toTimeString = (utc) => {
  const dateObj = utcToObj(utc);
  if (dateObj) {
    return `${dateObj.hours}:${dateObj.minutes} ${dateObj.phase}`;
  }
  return '';
};

export const toSlashedDT = (lang, utc) =>
  `${toDateString(lang, utc)} | ${toTimeString(utc)}`;
export const toDottedDT = (lang, utc) =>
  `${toDateString(lang, utc)}.${toTimeString(utc)}`;
