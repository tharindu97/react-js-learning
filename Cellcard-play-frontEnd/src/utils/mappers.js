/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Thursday, 01st October 2020 04:28 pm
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

/**
 * Returns a status object of given type
 * @author Dilum Sanjaya <dranasinghe@mitrai.com>
 * @param {object} statusObj - Status container
 * @param {Array} arr - Path as an array
 * @param {string} fallback - Fallback path if given path invalid
 * @return {object}
 */
const status = (statusObj, arr, fallback) => {
  return statusObj[arr.join('_')] || statusObj[fallback];
};

export default {
  status,
};
