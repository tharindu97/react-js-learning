export const toLocalNum = (num) => {
  if (typeof num === 'number') {
    return num.toLocaleString();
  }
  return '';
};

export const toPhoneNumberString = (num) => {
  if (typeof num !== 'string') return '';
  const areaRemoved = num.replace('+', '').replace('855', '');
  return `0${areaRemoved.slice(0, 2)} ${areaRemoved.slice(
    2,
    5,
  )} ${areaRemoved.slice(5)}`;
};

export const toSlashedDateTime = (textToRender) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const date_time_ar = textToRender.split(' ');
  const [year, month, day] = date_time_ar[0].split('-');
  const [hours, minitues] = date_time_ar[1].split(':');
  const pastTwelve = parseInt(hours) > 12;
  const Time = `${hours}:${minitues} ${pastTwelve ? 'PM' : 'AM'}`;
  textToRender = `${day} ${months[parseInt(month) - 1]} ${year} | ${Time}`;
  return textToRender;
};

export const toCurrency = (num) => {};
export const numberPadded = (num) => `0${num}`.slice(-2);
