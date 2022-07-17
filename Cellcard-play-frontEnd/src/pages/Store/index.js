/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Monday, 27th July 2020 5:00:40 pm
 * Module: Cellcard Play Frontend
 * -----
 * Modified: Sunday, 30th August 2020 8:17:29 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 *
 * Last Modified: Wednesday, 9th September 2020 11:35:29 am
 * Modified By: Jerobert (zjerobert@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import i18next from 'i18next';
import { Image, Container, Row, Col } from 'react-bootstrap';
import StoreSlider from 'components/molecules/SliderStore';
import ExclusiveOffersCta from 'components/molecules/ExclusiveOffersCta';
import Button from 'components/atoms/Button';
import StoreItemList from 'components/organisms/StoreItemList';
import FiltersDialog from 'components/organisms/FiltersDialog';
import LoggedinTemplate from 'templates/LoggedinTemplate';
import Heading from 'components/atoms/Heading';
import Globals from 'constants/Globals';
import { useTranslation } from 'react-i18next';
import { UserContext } from 'providers/User';
import { VIEW_EXCLUSIVE_OFFERS } from 'constants/Authorization';
import Icon from 'components/atoms/Icon';
import Typography from 'components/atoms/Typography';
import './style.scss';

const Store = () => {
  const history = useHistory();
  const { search } = window.location;
  const params = new URLSearchParams(search);
  const qtype = params.get('type');
  const qfilter = params.get('filter');
  const { user } = useContext(UserContext);
  const { t } = useTranslation();
  const showExclusive = user.isAuthorizedTo(VIEW_EXCLUSIVE_OFFERS);
  const [initialPause, setInitialPause] = useState(true);
  let initialQuery = {};
  let initialActiveFilter = null;
  if (qtype === 'category') {
    initialQuery = { categoryCode: qfilter };
  } else if (qtype === 'brand') {
    initialQuery = { brandCode: qfilter };
  }

  if (qtype) {
    initialActiveFilter = {
      type: qtype,
      value: qfilter,
    };
  }

  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState(initialActiveFilter);
  const [filterParam, setFilterParam] = useState(initialQuery);

  const handleFiltersChange = (filter) => {
    history.push({
      pathname: '/store',
      search: `?type=${filter.type}&filter=${filter.value}`,
    });
    setActiveFilter(filter);
    if (filter.type === Globals.FilterTypes.CATEGORY) {
      setFilterParam({
        categoryCode: filter.value,
      });
    } else {
      setFilterParam({
        brandCode: filter.value,
      });
    }
  };

  const clearFilters = () => {
    setActiveFilter(null);
    setFilterParam({});
    history.push({
      pathname: '/store',
      search: '',
    });
  };

  const afterFetched = (data) => {
    if (data.filteredInfo) {
      setActiveFilter({
        label: data.filteredInfo.content[i18next.language].displayName,
        ...activeFilter,
      });
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  useEffect(() => {
    setInitialPause(true);
    setTimeout(() => {
      setInitialPause(false);
    }, 200);
  }, [filterParam]);

  const EmptyResults = (title, body = '', imageName = '') => {
    return (
      <Container className="empty-result-items container vh-100 px-3">
        <Row className="row d-flex justify-content-center align-items-center pt-5">
          <Col md className="text-center pt-5">
            <Image
              src={`/images/store_empty/${imageName}`}
              name="empty-image"
            />
            <Heading tag="h1" className="my-3 title">
              {title}
            </Heading>
            <Heading tag="p" className="mt-2 mb-3  body">
              {body}
            </Heading>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <LoggedinTemplate title={t('GP_STORESUMMARY_TITLE')} active="store">
      {!activeFilter && <StoreSlider />}
      <div className="px-3">
        {!activeFilter && showExclusive && (
          <ExclusiveOffersCta to="/store/exclusive-offers" />
        )}
        <div className="store-listing my-3">
          {!showFilters && !initialPause && (
            <StoreItemList
              afterFetched={afterFetched}
              filters={filterParam}
              EmptyScreenView={EmptyResults(
                t('GP_SYSTEMMESSAGES_FILTERTITLE'),
                t('GP_SYSTEMMESSAGES_FILTERCONTENT'),
                'filter-no-products.svg',
              )}
            />
          )}
        </div>
        {!activeFilter && (
          <div className="filter-button-wrapper">
            <Button
              className="filter-button"
              onClick={toggleFilters}
              variant="dark"
              icon="filter"
              rounded
              translationKey="GP_STORESUMMARY_FILTER"
            />
          </div>
        )}
        {activeFilter && activeFilter.label && (
          <div className="store-selected-filter-container">
            <div className="store-selected-filter-item d-flex justify-content-center align-items-center px-3">
              <Typography
                value={activeFilter.label}
                color="gray-6"
                variant="body"
                weight="semi-bold"
                component="div"
              />
              <div
                className="store-selected-filter-item-icon ml-2 text-cta-blue"
                onClick={clearFilters}
                role="button"
                tabIndex={0}
                onKeyDown={() => {}}
              >
                <Icon icon="times" />
              </div>
            </div>
          </div>
        )}
      </div>
      <FiltersDialog
        onClose={toggleFilters}
        onChange={handleFiltersChange}
        show={showFilters}
      />
    </LoggedinTemplate>
  );
};

export default Store;
