/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import Typography from 'components/atoms/Typography';
import SummaryProgress from 'components/atoms/SummaryProgress';

const UsageTile = ({ data }) => {
  return (
    <div>
      <Typography
        value={data.type}
        color="gray"
        variant="sub1"
        weight="regular"
        component="div"
        className="mb-2"
      />
      <SummaryProgress total={data.total} current={data.left} />
      <Typography
        value={`${data.left}${data.unit}`}
        color="white"
        variant="h1"
        weight="semi-bold"
        component="h1"
        className="mt-2"
      />
      <Typography
        value={`left from ${data.total}${data.unit}`}
        color="gray"
        variant="body"
        weight="regular"
        component="div"
        className=""
      />
    </div>
  );
};

export default UsageTile;
