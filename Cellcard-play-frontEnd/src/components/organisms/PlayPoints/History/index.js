/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Friday, 07th August 2020 3:08:14 pm
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React from 'react';
import Typography from 'components/atoms/Typography';
import clsx from 'clsx';
import './style.scss';
import _ from 'lodash';
import i18next from 'i18next';
import { timeFill } from 'constants/DateTime';

const History = ({ data }) => {
  const hasHistory =
    data.history && Array.isArray(data.history) && data.history.length;
  const currentLanguage = i18next.language;

  return (
    <>
      <Typography
        translationKey="GP_PLAYPOINTS_POINTSHISTORYTITLE"
        color="cellcard"
        variant="h3"
        weight="semi-bold"
        component="h3"
        className="mb-3 pl-3 mt-4"
      />
      {!hasHistory && (
        <Typography
          translationKey="GP_PLAYPOINTS_NOPOINTHISTORY"
          color="gray"
          variant="body"
          weight="regular"
          component="div"
          className="mt-3 px-3"
        />
      )}
      <div className="mb-4">
        {data.history.map((date, mainIndex) => (
          <div className="" key={date.transactionDate}>
            <Typography
              value={`${date.transactionDate}${timeFill}`}
              color="gray"
              variant="sub1"
              weight="regular"
              component="div"
              className="pl-3 bg-gray-2 py-2"
              type="date"
            />

            {date.transactions.map((transaction, index) => (
              <div
                className={clsx(
                  'd-flex justify-content-between align-items-end pt-3 pb-3 px-3',
                  (index !== date.transactions.length - 1 ||
                    mainIndex === data.history.length - 1) &&
                    'history-activity',
                )}
                key={transaction.transactionDateTime}
              >
                <div className="">
                  <Typography
                    value={_.get(
                      transaction,
                      `content.${currentLanguage}.description`,
                    )}
                    color="white"
                    variant="body"
                    weight="regular"
                    component="div"
                  />
                  <Typography
                    value={transaction.transactionDateTime}
                    color="gray"
                    variant="sub2"
                    weight="regular"
                    component="div"
                    className="mt-2"
                    type="time"
                  />
                </div>
                <Typography
                  value={transaction.points}
                  color="gray"
                  variant="body"
                  weight="semi-bold"
                  component="div"
                  type="number"
                  className={clsx(
                    transaction.points > 0
                      ? 'history-activity-value-plus'
                      : 'history-activity-value-minus',
                  )}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default History;
