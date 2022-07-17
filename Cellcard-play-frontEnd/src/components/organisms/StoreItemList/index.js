/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Wednesday, 12th August 2020 5:35:16 pm
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Sunday, 30th August 2020 8:24:53 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from 'react-bootstrap';

import i18next from 'i18next';
import _ from 'lodash';
import api from 'api';
import StoreItem from 'components/molecules/StoreItem';
import VoucherItem from 'components/molecules/VoucherItem';

const StoreItemList = (props) => {
  const { language } = i18next;
  const {
    filters = {},
    path = 'stores',
    pageSize = 10,
    afterFetched,
    storeItemType = 'product',
    EmptyScreenView = <div>No Results Found</div>,
  } = props;
  const [dataLength, setDataLength] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const source = _.get(api, path);
  const setStoreData = (data, refresh = false) => {
    if (data) {
      const newItems = data.data;
      let allItems = [...items, ...newItems];
      if (refresh) {
        allItems = data.data;
      }
      setItems(allItems);
      setDataLength(dataLength);
      if (page >= data.pagination.totalPages) {
        setHasMore(false);
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    setPage(1);
    setHasMore(true);
    setDataLength(0);
    setItems([]);
    if (source) {
      source
        .get({
          pageNumber: page,
          pageSize,
          ...filters,
        })
        .then((res) => {
          setLoading(false);
          if (res && res.data) {
            setStoreData(res.data, true);
            afterFetched && afterFetched(res.data);
          }
        });
    }
  }, [filters]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchMoreData = () => {
    if (source) {
      const nextPage = page + 1;
      setPage(nextPage);
      source
        .get({
          pageNumber: nextPage,
          pageSize,
          ...filters,
        })
        .then((res) => {
          if (res.data) {
            setStoreData(res.data);
          }
        });
    }
  };

  if (loading)
    return (
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );

  return (
    <>
      {!loading && items.length === 0 && EmptyScreenView}
      <InfiniteScroll
        loader={
          loading && (
            <div className="text-center p-4">
              <Spinner animation="border" variant="primary" />
            </div>
          )
        }
        dataLength={items.length}
        hasMore={hasMore}
        next={fetchMoreData}
      >
        {items.map((item) => (
          <React.Fragment key={item.code}>
            {(storeItemType === 'voucher-active' ||
              storeItemType === 'voucher-inactive') && (
              <VoucherItem item={item} language={language} />
            )}
            {storeItemType === 'product' && (
              <StoreItem
                to={`/store/product/${item.code}`}
                {...item}
                lang={language}
              />
            )}
          </React.Fragment>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default StoreItemList;
