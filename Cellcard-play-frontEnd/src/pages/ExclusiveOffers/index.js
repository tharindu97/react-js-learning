/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Wednesday, 12th August 2020 5:35:16 pm
 * Module: Cellcard Play Frontend
 * -----
 * Modified: Sunday, 30th August 2020 8:23:12 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * -----
 * Modified: Friday, 11th September 2020 12:15 pm
 * Modified By: Jerobert (zjerobert@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import React, { useState } from 'react';
import { Image, Tabs, Tab } from 'react-bootstrap';
import Template from 'templates/LoggedInSubTemplate';
import StoreItemList from 'components/organisms/StoreItemList';
import Heading from 'components/atoms/Heading';
import Wrapper from 'templates/Wrapper';
import { useTranslation } from 'react-i18next';
import useQueryParams from 'hooks/useQueryParams';
import { EXCLUSIVE_TABS } from 'constants/Globals';
import { useHistory } from 'react-router-dom';
import { ROUTE_STORE_EXCLUSIVE } from 'constants/Routes';
import './style.scss';

const EmptyResults = (title, body = '', imageName = '') => {
  return (
    <div className="empty-result-exclusive-items">
      <Image src={`/images/store_empty/${imageName}`} alt="empty-image" />
      <Heading tag="h1" className="my-3 title">
        {title}
      </Heading>
      <Heading tag="p" className="mt-2 mb-3  body">
        {body}
      </Heading>
    </div>
  );
};

const Page = () => {
  const { t } = useTranslation();
  const { querySearch } = useQueryParams();
  const [key, setKey] = useState(querySearch.tab || EXCLUSIVE_TABS.GAMES);
  const history = useHistory();

  const onTabChange = (newKey) => {
    history.replace(`${ROUTE_STORE_EXCLUSIVE}?tab=${newKey}`);
    setKey(newKey);
  };

  return (
    <Template
      active="store"
      back
      title={t('GP_EXCLUSIVEOFFERS_TITLE')}
      share={false}
    >
      <Tabs
        activeKey={key}
        onSelect={(k) => onTabChange(k)}
        className="tab-game-items px-3"
      >
        <Tab
          eventKey={EXCLUSIVE_TABS.GAMES}
          title={t('GP_EXCLUSIVEOFFERS_GAMEITEMS')}
        >
          <Wrapper>
            <StoreItemList
              path="stores.exclusive"
              filters={{ isGameItem: true }}
              EmptyScreenView={EmptyResults(
                t('GP_SYSTEMMESSAGES_NOEXCLUSIVEOFFERTITLE'),
                t('GP_SYSTEMMESSAGES_NOGAMEITEMCONTENT'),
                'game-console.svg',
              )}
            />
          </Wrapper>
        </Tab>
        <Tab
          eventKey={EXCLUSIVE_TABS.PROMOTIONS}
          title={t('GP_EXCLUSIVEOFFERS_PROMOTIONS')}
        >
          <Wrapper>
            <StoreItemList
              path="stores.exclusive"
              filters={{ isGameItem: false }}
              EmptyScreenView={EmptyResults(
                t('GP_SYSTEMMESSAGES_NOPROMOTIONTITLE'),
                t('GP_SYSTEMMESSAGES_NOPROMOTIONCONTENT'),
                'discount-label.svg',
              )}
            />
          </Wrapper>
        </Tab>
      </Tabs>
    </Template>
  );
};

export default Page;
