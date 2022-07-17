/*
 * Author: Buwaneka Sumanasekara (bsumanasekara@mitrai.com)
 * Date: Tuesday, 18th August 2020 10:06:03 am
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Monday, 21st September 2020 10:34 am
 * Modified By: Dilum Sanjaya (dranasinghe@mitrai.com)
 * -----
 */

import React, { useEffect, useState } from 'react';
import { Image, Tabs, Tab } from 'react-bootstrap';
import LoggedInSubTemplate from 'templates/LoggedInSubTemplate';
import StoreItemList from 'components/organisms/StoreItemList';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Wrapper from 'templates/Wrapper';
import { useTranslation } from 'react-i18next';
import { VOUCHER_TABS } from 'constants/Globals';
import { useHistory } from 'react-router-dom';
import { ROUTE_VOUCHER_LIST } from 'constants/Routes';
import useQueryParams from 'hooks/useQueryParams';

import './style.scss';

const ListPage = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [initialPause, setInitialPause] = useState(true);
  const { querySearch } = useQueryParams();

  const [key, setKey] = useState(querySearch.tab || VOUCHER_TABS.ACTIVE);

  const onTabChange = (newKey) => {
    history.replace(`${ROUTE_VOUCHER_LIST}?tab=${newKey}`);
    setKey(newKey);
  };

  useEffect(() => {
    setTimeout(() => {
      setInitialPause(false);
    }, 100);
  }, []);

  const EmptyResults = (title, body = '', subtitle = '', buttonLabel = '') => {
    return (
      <div className="empty-result-vouchers">
        <Image src="/images/vouchers/empty-voucher.svg" alt="empty-voucher" />
        <Heading tag="h1" className="my-3 title">
          {title}
        </Heading>
        <Heading tag="p" className="mt-2 mb-3  body">
          {body}
        </Heading>
        {subtitle !== '' && (
          <Heading tag="p" className="mb-3 body">
            {subtitle}
          </Heading>
        )}
        {buttonLabel !== '' && (
          <Button size="lg" to="/store" rounded label={buttonLabel} />
        )}
      </div>
    );
  };

  return (
    <LoggedInSubTemplate
      title={t('GP_NONCELLCARDPROFILE_MYVOUCHERSTITLE')}
      active="me"
      share={false}
    >
      <Tabs activeKey={key} onSelect={(k) => onTabChange(k)}>
        <Tab eventKey={VOUCHER_TABS.ACTIVE} title={t('GP_VOUCHERS_ACTIVE')}>
          <Wrapper>
            {!initialPause && (
              <StoreItemList
                path="vouchers.all"
                filters={{ isActive: true }}
                storeItemType="voucher-active"
                EmptyScreenView={EmptyResults(
                  t('GP_VOUCHERS_NOACTIVEVOUCHERSTITLE'),
                  t('GP_VOUCHERS_NOACTIVEVOUCHERSCONTENTONE'),
                  t('GP_VOUCHERS_NOACTIVEVOUCHERSCONTENTTWO'),
                  t('GP_VOUCHERS_NOACTIVEVOUCHER'),
                )}
              />
            )}
          </Wrapper>
        </Tab>
        <Tab eventKey={VOUCHER_TABS.EXPIRED} title={t('GP_VOUCHERS_INACTIVE')}>
          <Wrapper>
            {!initialPause && (
              <StoreItemList
                path="vouchers.all"
                filters={{ isActive: false }}
                storeItemType="voucher-inactive"
                EmptyScreenView={EmptyResults(
                  t('GP_VOUCHERS_NOINACTIVEVOUCHERSTITLE'),
                  t('GP_VOUCHERS_NOINACTIVEVOUCHERSCONTENT'),
                )}
              />
            )}
          </Wrapper>
        </Tab>
      </Tabs>
    </LoggedInSubTemplate>
  );
};

export default ListPage;
