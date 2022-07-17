/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React, { useEffect, useState } from 'react';
import OfferTop from 'components/organisms/PlayPoints/OfferTop';
import OfferSelect from 'components/organisms/PlayPoints/OfferSelect';
import GenericTemplate from 'templates/GenericTemplate';
import { Spinner } from 'react-bootstrap';

import api from 'api';

const PlaypointsOffer = (props) => {
  const [data, onDataFetch] = useState({});
  const [loading, onLoadingChange] = useState(true);

  useEffect(() => {
    api.points.pointTypes().then((data) => {
      onDataFetch(data.data);
      onLoadingChange(false);
    });
  }, []);

  return (
    <GenericTemplate back>
      {loading ? (
        <div className=" d-flex justify-content-center p-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <>
          <OfferTop data={data} />
          <OfferSelect data={(data && data.denominators) || []} />
        </>
      )}
    </GenericTemplate>
  );
};

export default PlaypointsOffer;
