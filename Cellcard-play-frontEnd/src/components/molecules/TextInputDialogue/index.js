/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Tuesday 4th AUGUST 2020 9:00:00 am
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Button from 'react-bootstrap/Button';
import { InputGroup, FormControl } from 'react-bootstrap';
import Icon from 'components/atoms/Icon';
import Typography from 'components/atoms/Typography';

import './style.scss';

const TextInputDialogue = (props) => {
  const { title, subTitle, buttonTitle, onConfirm, label, onClose, show, name, hasErrors } = props;
  const [value, setValue] = useState(name);

  useEffect(() => {
    if (show) {
      setValue(name);
    }
  }, [show]);
  return (
    <>
      <div className={clsx('backdrop', show && 'backdrop-show')}></div>
      <div className={clsx('text-input-dialogue', show && 'text-input-dialogue-show')}>
        <div className="text-input-dialogue-body">
          <button className="text-input-dialogue-body-close-icon" onClick={onClose}>
            <Icon icon="times" />
          </button>
          <h2 className="text-input-dialogue-body-title-main">{title}</h2>
          <h3 className="text-input-dialogue-body-title-sub">{subTitle}</h3>

          <div className="text-input-dialogue-body-input-box">
            <div className="text-input-dialogue-body-input-box-container">
              <label className="text-input-dialogue-body-input-box-container-label">{label}</label>
              <InputGroup>
                <FormControl type="text" value={value} onChange={(e) => setValue(e.target.value)} />
              </InputGroup>
            </div>
            {hasErrors && (
              <Typography
                value="Please enter a valid name"
                color="red-1"
                variant="sub1"
                weight="regular"
                component="div"
                className="pt-1"
                textCenter
              />
            )}
          </div>
          <Button
            className="text-input-dialogue-body-action-button"
            variant="primary"
            style={{ borderRadius: 0, width: '100%' }}
            onClick={() => onConfirm(value)}
          >
            {buttonTitle}
          </Button>
        </div>
      </div>
    </>
  );
};

export default TextInputDialogue;
