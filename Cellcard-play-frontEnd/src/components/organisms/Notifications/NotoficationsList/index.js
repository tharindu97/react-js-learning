/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Thursday, 17th September 2020 10:04 am
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NotificationsItem from 'components/molecules/NotificationsItem';
import { Spinner } from 'react-bootstrap';
import api from 'api';
import _ from 'lodash';

const NotificationsList = ({ tab, data }) => {
  const [items, updateItems] = useState(data.notifications);
  const [hasMore, updateHasMore] = useState(data.hasMore);
  const height = window.innerHeight;
  const [page, setPage] = useState(1);

  const fetchMoreData = () => {
    setPage(page + 1);
    api.notifications
      .getNotifications({
        type: tab,
        pageNumber: page + 1,
        pageSize: 10,
        continuationId: data.continuationId,
      })
      .then((res) => {
        updateItems([...items, ...res.data.notifications]);
        updateHasMore(_.get(res, 'data.pagination.totalPages', 1) > page + 1);
      });

    return [];
  };
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
      endMessage={<div className="" />}
    >
      {items.map((i) => (
        <NotificationsItem key={i.code} item={i} />
      ))}
    </InfiniteScroll>
  );
};

export default NotificationsList;
