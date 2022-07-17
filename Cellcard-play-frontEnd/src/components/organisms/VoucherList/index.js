/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Thursday, 17th September 2020 10:04 am
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import api from 'api';
import i18next from 'i18next';
import _ from 'lodash';
import VoucherItem from 'components/molecules/VoucherItem';
import { Spinner } from 'react-bootstrap';

const NotificationsList = ({ isActive }) => {
  const [items, updateItems] = useState([]);
  const [hasMore, updateHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const height = window.innerHeight;
  const { language } = i18next;

  const getNextPage = () => {
    api.vouchers.all
      .get({ isActive, pageNumber: page + 1, pageSize: 10 })
      .then((res) => {
        const { data, pagination } = _.get(res, 'data', {
          data: [],
          pagination: {},
        });
        const { totalPages } = pagination;
        updateItems([...items, ...data]);
        updateHasMore(totalPages > page + 1);
        setLoading(false);
        setPage(page + 1);
      });
  };
  useEffect(() => {
    getNextPage();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchMoreData = () => {
    getNextPage();
  };
  if (loading) {
    return (
      <div className="d-flex p-1 justify-content-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={
        <div className="d-flex p-1 justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      }
      height={height - 110}
      endMessage={<div className="">No more items</div>}
    >
      {items.map((item) => (
        <VoucherItem
          item={item}
          language={language}
          key={item.voucherReference}
        />
      ))}
    </InfiniteScroll>
  );
};

export default NotificationsList;
