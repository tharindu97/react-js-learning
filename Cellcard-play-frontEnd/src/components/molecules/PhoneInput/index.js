/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Wednesday, 22nd July 2020 1:25:02 pm
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Sunday, 30th August 2020 9:09:43 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import './style.scss';
import { InputGroup, FormControl } from 'react-bootstrap';
import { KH_FLAG_IMAGE } from 'constants/Images';

const PhoneInput = (props) => {
  const { label, onChange, className, error, initialValue, maxLength } = props;

  const handleChange = (e) => {
    const val = e.target.value;
    if (maxLength && val.length > maxLength) {
      return;
    }
    if (Number.isNaN(val)) {
      return;
    }
    if (onChange) {
      onChange(e);
    }
  };

  const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(
        0,
        object.target.maxLength,
      );
    }
  };

  return (
    <div className={`phone-input ${className} ${error ? 'error' : ''}`}>
      <label className="phone-input-label">{label}</label>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <img src={KH_FLAG_IMAGE.src} alt={KH_FLAG_IMAGE.alt} /> +855(0)
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          type="text"
          pattern="[0-9]*"
          value={initialValue}
          inputmode="numeric"
          onChange={handleChange}
          maxLength="9"
          onInput={maxLengthCheck}
        />
      </InputGroup>
    </div>
  );
};

export default PhoneInput;
