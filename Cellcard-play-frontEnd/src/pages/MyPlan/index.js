/*
 * Author: Jerobert (zjerobert@mitrai.com)
 * Date: Thursday, 27th August 2020 11:00:40 am
 * Module: Cellcard Play Frontend

 * Last Modified: Friday, 11th September 2020 10:00:29 am
 * Modified By: Jerobert (zjerobert@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Image, Spinner } from 'react-bootstrap';
import GenericTemplate from 'templates/GenericTemplate';
import CardError from 'components/molecules/CardError';
import Button from 'components/atoms/Button';
import CardPlanStatus from 'components/molecules/CardPlanStatus';
import CardPlanDetail from 'components/molecules/CardPlanDetail';
import ListItem from 'components/atoms/ListItem';
import DialogBottomDrawer from 'components/molecules/DialogBottomDrawer';
import DialogFullDrawer from 'components/molecules/DialogFullDrawer';
import Typography from 'components/atoms/Typography';
import Wrapper from 'templates/Wrapper';
import './style.scss';
import api from 'api';
import ActionItem from 'components/atoms/ActionItem';
import { useTranslation } from 'react-i18next';
import { ROUTE_SHARE_REFERRAL } from 'constants/Routes';
import toLocal from 'utils/languageOps';
import i18next from 'i18next';

const MyPlan = () => {
  const { t } = useTranslation();
  const currentLanguage = i18next.language;
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();

  const account = query.get('account');

  const [plan, setPlan] = useState({ loading: true });
  const [isLogoutModalVisisble, showLogout] = useState('');
  const [isSuccessModalVisisble, showSuccess] = useState('');

  const doUnsubscribe = (code) => {
    showLogout(false);
    api.plans.unsubscribe({ planCode: code }).then((data) => {
      if (data.status === 200) {
        showSuccess(true);
      }
    });
  };

  useEffect(() => {
    api.plans.userPlanInfo().then((data) => {
      if (data) {
        const {
          code,
          price,
          autoRenew,
          renewInDays,
          validFrom,
          validUntil,
        } = data.data;
        const { title, details, renewal } = data.data.content[currentLanguage];
        const planObj = {
          code,
          title,
          price,
          validFrom,
          validUntil,
          autoRenew,
          renewInDays,
          renewal,
          details,
          loading: false,
        };
        setPlan(planObj);
      }
    });
  }, []);

  const renderAccounts = () => {
    if (account === 'inactive') {
      return (
        <CardError title={t('GP_PLANDETAILS_INACTIVETITLE')}>
          {t('GP_PLANDETAILS_INACTIVEDESC')}
          <Button rounded block label={t('GP_PLANDETAILS_INACTIVEACTION')} />
        </CardError>
      );
    }
    if (account === 'deleted') {
      return (
        <CardError title={t('GP_PLANDETAILS_TOBEDELETEDTITLE')}>
          {t('GP_PLANDETAILS_TOBEDELETEDDESC')}
        </CardError>
      );
    }

    return null;
  };

  return (
    <GenericTemplate cross title={t('GP_PLANDETAILS_TITLE')}>
      <Wrapper>
        {plan.loading ? (
          <div className=" d-flex justify-content-center p-5">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <>
            <div className="plan-wrapper">
              <div className="my-plan">
                {renderAccounts()}
                <CardPlanStatus plan={plan} />
              </div>

              {plan.details != null ? (
                <CardPlanDetail details={plan.details} />
              ) : null}

              <ListItem
                hideIcon
                tag="p"
                ItemProps={{ onClick: () => showLogout(true) }}
                className="btn--unsubscribe mb-5 mt-3"
              >
                {t('GP_PLANDETAILS_UNSUBSCRIBE')}
              </ListItem>

              <div className="btn-upgrade-wrapper pb-3">
                <ActionItem
                  variant="body"
                  weight="semi-bold"
                  rounded
                  flex
                  className=".h-48"
                  value={t('GP_PLANDETAILS_UPGRADE')}
                  to={ROUTE_SHARE_REFERRAL}
                />{' '}
              </div>
            </div>

            <DialogBottomDrawer
              show={isLogoutModalVisisble}
              onClose={() => showLogout(false)}
              title={t('GP_PLANDETAILS_UNSUBSCRIBE')}
              subTitle={toLocal(t('GP_PLANDETAILS_STOPRENEWALDESC'), {
                plan: plan.title,
              })}
              onConfirm={() => doUnsubscribe(plan.code)}
              buttonTitle={t('GP_CONFIRMPURCHASE_CONFIRM')}
            />

            <DialogFullDrawer
              show={isSuccessModalVisisble}
              onClose={() => showSuccess(false)}
              buttonTitle={t('GP_SYSTEMMESSAGES_DONE')}
            >
              <div>
                <Image src="/images/modal/success-2.svg" />
              </div>

              <Typography
                value={t('GP_SYSTEMMESSAGES_SUCCESSPURCHASETITLE')}
                color="white"
                variant="h0"
                weight="semi-bold"
                component="h1"
                textCenter
              />
              <br />
              <Typography
                value={toLocal(t('GP_PLANDETAILS_USERCONFIRMATIONDESC'), {
                  plan: plan.title,
                })}
                color="white-pale"
                variant="body"
                weight="regular"
                component="p"
                textCenter
              />
              <br />
              <Typography
                value={t('GP_PLANDETAILS_USERCONFIRMATIONDESCFOLLOWUP')}
                color="white-pale"
                variant="body"
                weight="regular"
                component="p"
                textCenter
              />
            </DialogFullDrawer>
          </>
        )}
      </Wrapper>
    </GenericTemplate>
  );
};

export default MyPlan;
