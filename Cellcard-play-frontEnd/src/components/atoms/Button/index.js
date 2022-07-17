/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Wednesday, 12th August 2020 2:18:46 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from '../Icon';

const UiButton = (props) => {
  const {
    variant = 'primary',
    to,
    label = 'Label',
    icon,
    rounded,
    radius,
    iconLeft,
    translationKey,
    ...otherProps
  } = props;

  const { t } = useTranslation();

  let labelToDispaly = label;
  if (translationKey) {
    labelToDispaly = t(translationKey);
  }

  const variantProp = `${variant} ${rounded ? 'btn--rounded' : ''} ${
    radius ? 'btn--radius' : ''
  } ${icon ? 'btn--icon' : ''} ${icon && iconLeft ? 'btn--icon--left' : ''} `;

  return (
    <>
      {to && (
        <Button as={Link} to={to} variant={variantProp} {...otherProps}>
          {icon && <Icon icon={icon} />}
          {labelToDispaly}
        </Button>
      )}
      {!to && (
        <Button variant={variantProp} {...otherProps}>
          {icon && <Icon icon={icon} />}
          {labelToDispaly}
        </Button>
      )}
    </>
  );
};

export default UiButton;
