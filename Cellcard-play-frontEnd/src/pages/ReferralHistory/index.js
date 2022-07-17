/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React, { useEffect, useState } from 'react';
import GenericTemplate from 'templates/GenericTemplate';
import Typography from 'components/atoms/Typography';
import { useTranslation } from 'react-i18next';
import { toSlashedDT } from 'utils/timeOps';
import { Spinner } from 'react-bootstrap';
import api from 'api';
import InfiniteScroll from 'react-infinite-scroll-component';
import _ from 'lodash';

import './style.scss';

const range = (n) =>
  Array(n)
    .fill(0)
    .map(() => ({ code: Math.random() }));

const ReferralHistory = () => {
  const [items, updateItems] = useState([]);
  const [hasMore, updateHasMore] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    api.referrals
      .getHistory({
        pageNumber: page,
        pageSize: 10,
      })
      .then(
        (res) => {
          const history = _.get(res, 'data.history', []);
          const totalPages = _.get(res, 'data.pagination.totalPages', 1);
          updateItems(history.map((i) => ({ ...i, code: Math.random() })));
          updateHasMore(totalPages > page);
          setLoading(false);
        },
        () => {
          updateItems([]);
          updateHasMore(false);
          setLoading(false);
        },
      );
  }, []);

  const fetchMoreData = () => {
    setTimeout(() => {
      setPage(page + 1);
      updateItems([...items, ...range(10)]);
      if (page > 5) {
        updateHasMore(false);
      }
    }, 3000);
  };

  if (loading) {
    return (
      <div className="d-flex p-1 mt-4 justify-content-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  return (
    <GenericTemplate title={t('GP_REFERRAL_REWARDS_HISTORY')} back>
      <div className="px-3">
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className="d-flex p-1 justify-content-center">
              <Spinner animation="border" variant="primary" />
            </div>
          }
          endMessage={<div className="" />}
        >
          {items.map((i) => (
            <div className="px-3 py-3 bg-gray-2 border-10" key={i.code}>
              <Typography
                value={i.receivedFrom}
                color="white"
                variant="body"
                weight="regular"
                component="div"
              />

              <div className="d-flex justify-content-between align-items-end mt-2">
                <Typography
                  value={toSlashedDT(t, i.earnedDate)}
                  color="gray"
                  variant="sub2"
                  weight="regular"
                  component="div"
                />
                <Typography
                  value={`+${i.earnedPoints}`}
                  color="cta-blue"
                  variant="body"
                  weight="semi-bold"
                  component="div"
                />
              </div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </GenericTemplate>
  );
};

export default ReferralHistory;
