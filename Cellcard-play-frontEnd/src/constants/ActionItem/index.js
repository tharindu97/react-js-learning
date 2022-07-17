/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Monday, 21st September 2020 03:56 pm
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
export const types = {
  BLUE: 'blue',
  DARK: 'dark',
  SUB_STATUS: 'subStatus',
  BLUE_OUTLINE: 'blueOutline',
};

export const classes = {
  blue: ['action-item-bg-blue', 'action-item-text-white'],
  subStatus: ['action-item-bg-white', 'action-item-text-blue'],
  blueOutline: [
    'action-item-bg-none',
    'action-item-outline-blue',
    'action-item-text-blue',
  ],
  dark: ['action-item-bg-dark', 'action-item-text-white'],
  whiteUnderlined: ['action-item-white-underlined', 'action-item-no-bg'],
  blueUnderlined: ['action-item-blue-underlined', 'action-item-no-bg'],
  content: ['action-item-no-bg'],
};
export default { types, classes };
