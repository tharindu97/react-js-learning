/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Wednesday, 16th September 2020 04:44 pm
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React, { useEffect, useState } from 'react';
import GenericTemplate from 'templates/GenericTemplate';
import { Tabs, Tab, Spinner } from 'react-bootstrap';
import NotoficationsList from 'components/organisms/Notifications/NotoficationsList';
import { NOTIFICATION_TABS } from 'constants/Globals';
import { ROUTE_NOTIFICATIONS } from 'constants/Routes';
import { useHistory } from 'react-router-dom';
import EmptyList from 'components/organisms/Notifications/EmptyList';
import useQueryParams from 'hooks/useQueryParams';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import api from 'api';
import './style.scss';

const Notifications = () => {
  const { querySearch } = useQueryParams();
  const [key, setKey] = useState(querySearch.tab || NOTIFICATION_TABS.EXTERNAL);
  const [dataLists, setDataLists] = useState({});
  const [unreads, setUnreads] = useState({ internal: false, external: false });
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        const [externalMessages, internalMessages] = await Promise.all([
          api.notifications.getNotifications({
            type: NOTIFICATION_TABS.EXTERNAL,
            pageNumber: 1,
            pageSize: 10,
          }),
          api.notifications.getNotifications({
            type: NOTIFICATION_TABS.INTERNAL,
            pageNumber: 1,
            pageSize: 10,
          }),
        ]);

        const data = {
          internalMessages: {
            ...internalMessages.data,
            hasMore: _.get(internalMessages, 'data.pagination.totalPages') > 1,
          },
          externalMessages: {
            ...externalMessages.data,
            hasMore: _.get(externalMessages, 'data.pagination.totalPages') > 1,
          },
        };
        setUnreads({
          internal: _.get(internalMessages, 'data.hasNewNotifications'),
          external: false,
        });

        if (_.get(externalMessages, 'data.continuationId')) {
          api.notifications.updateReadStatus({
            continuationId: _.get(externalMessages, 'data.continuationId'),
            isRead: true,
            type: NOTIFICATION_TABS.EXTERNAL,
          });
        }

        setDataLists(data);
        setLoading(false);
      } catch (error) {}
    }
    fetchData();
  }, []);

  const updateTab = (tabKey) => {
    setUnreads({ ...unreads, [tabKey]: false });
    if (dataLists[`${tabKey}Messages`].continuationId) {
      api.notifications.updateReadStatus({
        continuationId: dataLists[`${tabKey}Messages`].continuationId,
        isRead: true,
        type: tabKey,
      });
    }
    history.replace(`${ROUTE_NOTIFICATIONS}?tab=${tabKey}`);
    setKey(tabKey);
  };

  if (loading) {
    return (
      <div className="d-flex pt-4 justify-content-center vh-100 align-items-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <GenericTemplate back title={t('GP_NOTIFICATIONS_TITLE')}>
      <Tabs
        id="notification-tabs"
        activeKey={key}
        onSelect={(k) => updateTab(k)}
      >
        <Tab
          eventKey={NOTIFICATION_TABS.EXTERNAL}
          title={
            <div className="d-inline-block position-relative">
              {t('GP_NOTIFICATIONS_SUBTITLE_FORYOU')}
              {unreads.external && (
                <div className="notifications-tab-indicator" />
              )}
            </div>
          }
        >
          <div className="px-3 py-2 notifications-list-container">
            {_.get(dataLists, 'externalMessages.notifications.length', 0) ? (
              <NotoficationsList
                tab={NOTIFICATION_TABS.EXTERNAL}
                data={dataLists.externalMessages}
              />
            ) : (
              <EmptyList tab={NOTIFICATION_TABS.EXTERNAL} />
            )}
          </div>
        </Tab>

        <Tab
          eventKey={NOTIFICATION_TABS.INTERNAL}
          title={
            <div className="d-inline-block position-relative">
              {t('GP_NOTIFICATIONS_SUBTITLE_MESSAGES')}
              {unreads.internal && (
                <div className="notifications-tab-indicator" />
              )}
            </div>
          }
        >
          <div className="px-3 py-2 notifications-list-container">
            {_.get(dataLists, 'internalMessages.notifications.length', 0) ? (
              <NotoficationsList
                tab={NOTIFICATION_TABS.INTERNAL}
                data={dataLists.internalMessages}
              />
            ) : (
              <EmptyList tab={NOTIFICATION_TABS.INTERNAL} />
            )}
          </div>
        </Tab>
      </Tabs>
    </GenericTemplate>
  );
};

export default Notifications;
