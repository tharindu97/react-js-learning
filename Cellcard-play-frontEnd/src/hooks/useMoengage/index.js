/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import { PRODUCT_PURCHASE, CHECKOUT } from 'constants/Moengage';

const useMoengage = () => {
  const itemCheckout = (data) => {
    window.Moengage.track_event(CHECKOUT, data);
  };
  const productPurchase = (data) => {
    window.Moengage.track_event(PRODUCT_PURCHASE, data);
  };

  return { itemCheckout, productPurchase };
};

export default useMoengage;
