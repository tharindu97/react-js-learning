/*
 * Author: Buwaneka Sumanasekara (bsumanasekara@mitrai.com)
 * Date: Friday, 21st August 2020 10:53:36 am
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Sunday, 23rd August 2020 8:52:04 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import clsx from 'clsx';
import Heading from '../../atoms/Heading';
import './style.scss';

const StoreHeading = (props) => {
  const { imageUrl, content, lang = 'en', subtitle } = props;
  const { displayName } = content[lang];
  return (
    <div className={clsx(`store-heading`)}>
      <div className="store-heading-media">
        {imageUrl && <img src={imageUrl} alt="store-heading" />}
      </div>
      <div className="store-heading-content my-auto">
        <Heading tag="h2">{displayName}</Heading>
        {subtitle}
      </div>
      <hr />
    </div>
  );
};

StoreHeading.defaultProps = {
  title: '',
  SubtitleTag: '',
};
export default StoreHeading;
