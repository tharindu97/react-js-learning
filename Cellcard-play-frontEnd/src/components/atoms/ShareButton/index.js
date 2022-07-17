/*
 * Author: Buwaneka Sumanasekara (bsumanasekara@mitrai.com)
 * Date: Thursday, 13th August 2020 2:51:56 pm
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Thursday, 13th August 2020 4:57:43 pm
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import './style.scss';
import clsx from 'clsx';
import Icon from 'components/atoms/Icon';
import { Button } from 'react-bootstrap';

const ShareButton = ({ className, ...otherProps }) => {
  const onClickShare = () => {
    const CurrentLocation = window.location.href;

    if (navigator.share) {
      navigator.share({
        url: CurrentLocation,
      });
    }
  };

  return (
    <Button
      variant="link"
      className={clsx('btn-share', className)}
      {...otherProps}
      onClick={onClickShare}
    >
      <Icon icon="share" />
    </Button>
  );
};

// Set default props
ShareButton.defaultProps = {
  className: [],
};

export default ShareButton;
