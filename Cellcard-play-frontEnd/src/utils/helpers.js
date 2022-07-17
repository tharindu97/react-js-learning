/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Thursday, 23rd July 2020 10:39:57 am
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

const helpers = {
  validatePhoneNumber: (number) => {
    const type1 = /(?:11|12|14|17|61|77|78|85|89|92|95|99)\d{6}/;
    const type2 = /(?:12|76)\d{7}/;
    const type3 = /(?:23)(?:11|12|14|17|61|77|78|85|89|92|95|99)\d{6}/;
    const type4 = /(?:10|13|15|16|60|66|67|68|69|70|80|81|83|84|86|87|90|93|98)\d{6}/;
    const type5 = /(?:18|23|31|38|39|71|88|96|97)\d{7}/;

    return (
      new RegExp(type1).test(number) ||
      new RegExp(type2).test(number) ||
      new RegExp(type3).test(number) ||
      new RegExp(type4).test(number) ||
      new RegExp(type5).test(number)
    );
  },
  getPlanData: (plan) => {
    const plans = {
      Play_Unli_1Y: {
        icon: `${process.env.REACT_APP_ASSESTS_URL}/Store/Exclusive_Badges/PlayUnlimited_1Y.png`,
        label: '1 Year',
      },
      Play_Unli_3M: {
        icon: `${process.env.REACT_APP_ASSESTS_URL}/Store/Exclusive_Badges/PlayUnlimited_3M.png`,
        label: '3-Months',
      },
      Play_Unli_1M: {
        icon: `${process.env.REACT_APP_ASSESTS_URL}/Store/Exclusive_Badges/PlayUnlimited_1M.png`,
        label: '1-Month',
      },
      Play_Unli_1W: {
        icon: `${process.env.REACT_APP_ASSESTS_URL}/Store/Exclusive_Badges/PlayUnlimited_1W.png`,
        label: '1 Week',
      },
    };
    return plans[plan] || {};
  },
  zeroPad: (num, places) => String(num).padStart(places, '0'),
  convertDateTime: (dateTimeString, dateOnly = false) => {
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
    let dateTime = '';
    try {
      const date_time_ar = dateTimeString.split(' ');
      const [year, month, day] = date_time_ar[0].split('-');
      dateTime = `${day} ${months[parseInt(month) - 1]} ${year}`;
      if (!dateOnly) {
        const [hours, minitues] = date_time_ar[1].split(':');
        const pastTwelve = parseInt(hours) > 12;
        const Time = `${hours}:${minitues} ${pastTwelve ? 'PM' : 'AM'}`;
        dateTime = `${dateTime}, ${Time}`;
      }
    } catch (error) {
      dateTime = '';
    }
    return dateTime;
  },
};
export const toQuery = (data) => `?${new URLSearchParams(data).toString()}`;

export const isRunningOnAsApp = () => {
  const isInWebAppiOS = window.navigator.standalone === true;
  const isInWebAppChrome = window.matchMedia('(display-mode: standalone)')
    .matches;
  return isInWebAppChrome || isInWebAppiOS;
};
export default helpers;
