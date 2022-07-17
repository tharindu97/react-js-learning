/*
 * Author: Buwaneka Sumanasekara (bsumanasekara@mitrai.com)
 * Date: Friday, 21st August 2020 11:55:35 am
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Thursday, 27th August 2020 5:46:46 pm
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

const VoucherStatus = {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  USED: 'USED',
};

const ModalTypes = {
  MODAL_TYPE_ERROR: 'error',
  MODAL_TYPE_SUCCESS: 'success',
  MODAL_TYPE_SUCCESS_CHECK: 'success-check',
  MODAL_TYPE_PENDING: 'pending',
};
const TransactionStatus = {
  SUCCESS: 'SUCCESS',
  PENDING: 'PENDING',
  FAILED: 'FAILED',
};

const TopUpItemId = 'Cellcard_Top_Up';

const ProductPurchasedStatus = {
  SUFFICIENT: 'SUFFICIENT',
  LIMIT_REACHED: 'LIMIT_REACHED',
  INSUFFICIENT: 'INSUFFICIENT',
  INELIGIBLE: 'INELIGIBLE',
};

const FilterTypes = {
  CATEGORY: 'category',
  BRAND: 'brand',
};

const FullPagePopupTypes = {
  TERMS_CONDITIONS: 'TERMS',
  PRIVACY_POLICY: 'PRIVACY',
};

export default {
  VoucherStatus,
  ModalTypes,
  TransactionStatus,
  ProductPurchasedStatus,
  TopUpItemId,
  FilterTypes,
  FullPagePopupTypes,
};

export const PLAN = 'PLAN';
export const PLAYPOINT = 'PLAYPOINT';
export const HOME = 'HOME';

export const VOUCHER_STATUS = {
  ACTIVE: 'ACTIVE',
  USED: 'USED',
  EXPIRED: 'EXPIRED',
};
export const VOUCHER_DURATIONS = {
  ACTIVE: 'GP_VOUCHERS_VALID',
  USED: 'GP_VOUCHERS_USED',
  EXPIRED: 'GP_VOUCHERS_EXPIRED',
};
export const VOUCHER_LIST_BUTTONS = {
  ACTIVE: 'GP_VOUCHERS_VIEW',
  USED: 'VOUCHERSTATUS_USED',
  EXPIRED: 'VOUCHERSTATUS_EXPIRED',
};
export const BUTTON_TYPES = {
  PRIMARY: 'blue',
  DARK: 'dark',
};

export const VOUCHER_TABS = {
  ACTIVE: 'active',
  EXPIRED: 'inactive',
};
export const EXCLUSIVE_TABS = {
  GAMES: 'games',
  PROMOTIONS: 'promotions',
};
export const NOTIFICATION_TABS = {
  INTERNAL: 'internal',
  EXTERNAL: 'external',
};

export const PACKAGE_TYPES = {
  PLAN: 'PLAN',
  POINTS: 'PLAYPOINT',
};
