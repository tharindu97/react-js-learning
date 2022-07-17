/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Friday, 21st August 2020 01:46 pm
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import Typography from 'components/atoms/Typography';
import UsageTile from 'components/molecules/UsageTile';
import i18next from 'i18next';

import './style.scss';

const UsageItem = ({ data }) => {
  const currentLanguage = i18next.language;

  return (
    <div>
      <div className="mt-3">
        <Typography
          value={`${data.frequency.toLowerCase()} Data`}
          color="cellcard"
          variant="h3"
          weight="semi-bold"
          component="span"
          className="text-capitalize"
        />
        <Typography
          value={` (${data.content[currentLanguage].title})`}
          color="cellcard"
          variant="h3"
          weight="semi-bold"
          component="span"
          className=""
        />
      </div>
      <div className="mb-3 mt-1">
        <Typography
          translationKey="GP_CELLCARDPROFILE_EXPIRESON"
          color="gray"
          variant="sub1"
          weight="regular"
          component="span"
        />
        <Typography
          value={data.expiry}
          color="gray"
          variant="sub1"
          weight="regular"
          component="span"
          type="date"
          className="ml-1"
        />
      </div>
      <div className="d-flex">
        <div className="w-50">
          <UsageTile data={data.data[0]} />
        </div>
        <div className="w-50 usage-item-tile-separator d-flex flex-column align-items-center">
          <UsageTile data={data.data[1]} />
        </div>
      </div>
    </div>
  );
};

export default UsageItem;
