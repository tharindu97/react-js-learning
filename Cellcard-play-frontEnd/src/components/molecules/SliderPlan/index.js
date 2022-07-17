/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Wednesday, 15th July 2020 10:06:49 am
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React, { useState, useEffect } from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';
import useQueryParams from 'hooks/useQueryParams';
import 'swiper/swiper-bundle.css';
import './index.scss';
import CardPlan from 'components/molecules/CardPlan';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { ROUTE_PLAN_CHECKOUT, ROUTE_STORE } from 'constants/Routes';
import i18next from 'i18next';
import { AREA_CODE } from 'constants/Defaults';
import Modal from 'components/molecules/Modal';
import _ from 'lodash';

import { HOME } from 'constants/Globals';

import api from '../../../api';

Swiper.use([Navigation, Pagination]);

const SliderPlan = ({ forUser }) => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setModalVisibility] = useState(false);
  const history = useHistory();

  const { querySearch } = useQueryParams();
  const initSwiper = () => {
    new Swiper('.plan-swiper', {
      slidesOffsetAfter: 30,
      slidesPerView: 1.3,
      observer: true,
      observeParents: true,
    });
  };
  useEffect(() => {
    let receiver = '';
    if (querySearch.receiver) {
      receiver = `${AREA_CODE}${querySearch.receiver}`;
    }
    const request = forUser ? api.plans.userPlan : api.plans.plan;
    request(receiver).then((data) => {
      if (data) {
        let matched = null;
        const planSet = _.get(data, forUser ? 'data.plans' : 'data', []);
        if (querySearch.productCode) {
          matched = planSet.find(
            (item) => item.code === querySearch.productCode,
          );
        }
        if (
          querySearch.from === HOME &&
          _.get(data, 'data.hasPlan') &&
          !receiver
        ) {
          history.push(ROUTE_STORE);
        } else if (matched) {
          history.push(
            `${ROUTE_PLAN_CHECKOUT}?${new URLSearchParams(querySearch)}`,
          );
        } else {
          setLoading(false);
          setPlans(planSet);
          if (!planSet || !planSet.length) {
            setModalVisibility(true);
          }
          initSwiper();
        }
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return (
      <div className=" d-flex justify-content-center p-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <>
      <Modal
        show={showModal}
        confirmTitle="Okay"
        onConfirm={() => history.goBack()}
        ModalTitle="No plans"
        ModalBody="No plans are available for this user"
        IconType="error"
      />
      <div className="swiper-container plan-swiper">
        <div className="swiper-wrapper">
          {plans.map((plan) => {
            return (
              <div key={plan.code} className="swiper-slide">
                <CardPlan
                  {...plan}
                  lang={i18next.language}
                  forUser={forUser}
                  querySearch={querySearch}
                />
              </div>
            );
          })}
        </div>
        <div className="swiper-pagination" />
      </div>
    </>
  );
};

export default SliderPlan;
