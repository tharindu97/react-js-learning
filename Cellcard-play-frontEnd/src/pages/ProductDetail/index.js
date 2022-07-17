/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Thursday, 13th August 2020 1:41:02 am
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { UserContext } from 'providers/User';
import i18next from 'i18next';
import api from '../../api';
import ProductDetail from '../../components/organisms/ProductDetail';

import Template from '../../templates/LoggedInSubTemplate';

import './style.scss';

const Page = () => {
  const { code } = useParams();
  const userDetails = useContext(UserContext);
  const { msisdn } = userDetails.user || {};
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.stores.getProduct({ code, msisdn }).then((data) => {
      if (data) {
        setProduct(data.data);
      }
    });
  }, [code, msisdn]);

  return (
    <Template title="" active="store" removeNav>
      {!product && (
        <div className="p-5 text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      {product && <ProductDetail {...product} lang={i18next.language} />}
    </Template>
  );
};

export default Page;
