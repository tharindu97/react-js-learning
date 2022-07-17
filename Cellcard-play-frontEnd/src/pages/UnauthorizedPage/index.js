/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Friday, 04th September 2020 02:44 pm
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import { IMG_UNAUTHORIZED } from 'constants/Images';
import Typography from 'components/atoms/Typography';
import { Image } from 'react-bootstrap';
import Button from '../../components/atoms/Button';

import './style.scss';

const UnauthorizedPage = (props) => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center vh-100">
      <Image
        src={IMG_UNAUTHORIZED.src}
        alt={IMG_UNAUTHORIZED.alt}
        className="unauthorized-page-icon"
      />
      <Typography
        value="Hmm, you can’t access this page."
        color="white"
        variant="h1"
        weight="extra-bold"
        component="h1"
        className="mt-3 px-5"
        textCenter
      />
      <Typography
        value="You don’t have permission to access this page. Please make sure you input the right url."
        color="gray"
        variant="body"
        weight="regular"
        component="div"
        className="mt-3 mb-3 px-5"
        textCenter
      />
      <div className="px-4">
        <Button label="Back To Homepage" rounded size="lg" block to="/" />
      </div>
    </div>
  );
};

export default UnauthorizedPage;
