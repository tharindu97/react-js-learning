/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Monday, 27th July 2020 10.30 am
 * Author: Jerobert (zjerobert@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import { Image } from 'react-bootstrap';

const AwardItem = ({ image, link }) => {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image src={image.src} alt={image.alt} />
      </a>
    </>
  );
};

export default AwardItem;
