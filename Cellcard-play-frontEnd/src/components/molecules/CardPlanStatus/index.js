/*
 * Author: Jerobert (zjerobert@mitrai.com)
 * Date: Wednesday, 19th August 2020 14.30
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React from 'react';
import { Card } from 'react-bootstrap';
import './style.scss';
import Icon from 'components/atoms/Icon';
import Typography from 'components/atoms/Typography';
import { useTranslation } from 'react-i18next';
import { toSlashedDT } from 'utils/timeOps';

const CardPlanStatus = ({ plan }) => {
  const { t } = useTranslation();
  return (
    <Card className="planstatus">
      <Card.Header>
        <div>
          <h3 className="planstatus-title text-cellcard">{plan.title}</h3>
          <p className="planstatus-price text-cellcard">{plan.price}</p>
        </div>
        {plan.autoRenew ? (
          <span className="planstatus--featured">
            {t('GP_PLANDETAILS_DAYSFORRENEWAL')} <br /> {plan.renewInDays}{' '}
            {t('GP_SUBSCRIPTIONPLANS_RENEWALDAYS')}
          </span>
        ) : (
          <span className="planstatus--featured">
            {t('GP_PLANDETAILS_DAYSFOREXPIRY')} <br /> {plan.renewInDays}{' '}
            {t('GP_SUBSCRIPTIONPLANS_RENEWALDAYS')}
          </span>
        )}
      </Card.Header>
      <Card.Body>
        <div className="planstatus-content">
          <h3 className="planstatus-title">{t('GP_PLANDETAILS_VALIDFROM')}</h3>

          <Typography
            value={toSlashedDT(t, plan.validFrom)}
            color="white-pale"
            variant="body"
            weight="regular"
            component="span"
          />
        </div>

        <div className="planstatus-content">
          <h3 className="planstatus-title">{t('GP_PLANDETAILS_VALIDUNTIL')}</h3>

          <Typography
            value={toSlashedDT(t, plan.validUntil)}
            color="white-pale"
            variant="body"
            weight="regular"
            component="span"
          />
        </div>
      </Card.Body>

      <Card.Footer>
        {plan.autoRenew ? (
          <p>
            <Icon icon="renew text-cellcard" /> {plan.renewal}
            <br />( Next Renewal on 31 Dec 2020 | 10:32 AM)
          </p>
        ) : (
          <p>
            <Icon icon="nonrenew text-red-1" /> Non-Renew
          </p>
        )}
      </Card.Footer>
    </Card>
  );
};

export default CardPlanStatus;
