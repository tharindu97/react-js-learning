/*
 * Author: Jerobert (zjerobert@mitrai.com)
 * Date: Monday, 27 July 2020 12.30 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React from 'react';
import { Image } from 'react-bootstrap';
import './style.scss';

const ItemPayment = (props) => {
  const { item } = props;
  return (
    <div className="payment-item">
      <div className="payment-item-img">
        <Image src={item.imageUrl} />
      </div>

      <div className="payment-item-content">
        <div className="payment-item-content-title">
          {item.content.en.title}
        </div>
        <div className="payment-item-content-desc mt-1">
          {item.content.en.desc}
        </div>
      </div>
    </div>
  );
};

export default ItemPayment;
