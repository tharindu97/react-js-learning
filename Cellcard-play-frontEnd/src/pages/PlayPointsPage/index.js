/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React, { useEffect, useState } from 'react';
import GenericTemplate from 'templates/GenericTemplate';

import Summary from 'components/organisms/PlayPoints/Summary';
import History from 'components/organisms/PlayPoints/History';
import { Spinner } from 'react-bootstrap';

import api from 'api';

const PlayPointsPage = (props) => {
  const [isLoading, onDataLoad] = useState(true);
  const [data, onSetData] = useState({});
  useEffect(() => {
    api.points.pointSummary().then((res) => {
      onSetData(res.data);
      onDataLoad(false);
    });
  }, []);
  return (
    <GenericTemplate cross>
      {isLoading ? (
        <div className="buy-plan-spinner d-flex justify-content-center pt-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <>
          <Summary data={data} />
          <History data={data} />
        </>
      )}
    </GenericTemplate>
  );
};

export default PlayPointsPage;
