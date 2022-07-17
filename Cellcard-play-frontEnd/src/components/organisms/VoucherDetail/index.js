/*
 * Author: Buwaneka Sumanasekara (bsumanasekara@mitrai.com)
 * Date: Friday, 21st August 2020 2:10:24 pm
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Monday, 24th August 2020 11:08:31 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React, { useState } from 'react';
import i18next from 'i18next';
import { Row, Col } from 'react-bootstrap';
import StoreHeading from 'components/molecules/StoreHeading';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import VoucherBarCode from 'components/molecules/VoucherBarCode';
import VoucherCode from 'components/molecules/VoucherCode';
import DialogPopup from 'components/molecules/DialogBottomDrawer';
import Globals from 'constants/Globals';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import Helpers from 'utils/helpers';
import './style.scss';
import api from '../../../api';

const { VoucherStatus } = Globals;

const source = _.get(api, 'vouchers');

const renderVoucherSubTitle = (voucher, t) => {
  let subTitleText = '';
  switch (voucher.status) {
    case VoucherStatus.ACTIVE:
      subTitleText = ` ${t(
        'GP_VOUCHERDETAILS_VALIDITY',
      )} : ${Helpers.convertDateTime(
        voucher.startDate,
        true,
      )} - ${Helpers.convertDateTime(voucher.endDate, true)}`;
      break;
    case VoucherStatus.EXPIRED:
      subTitleText = `${t('GP_VOUCHERS_EXPIRED')}: ${Helpers.convertDateTime(
        voucher.date,
      )}`;
      break;
    case VoucherStatus.USED:
      subTitleText = `${t('GP_VOUCHERS_USED')}: ${Helpers.convertDateTime(
        voucher.date,
      )}`;
      break;
    default:
      subTitleText = ``;
  }

  return <p>{subTitleText}</p>;
};

const VoucherDetails = (props) => {
  const { t } = useTranslation();

  const { voucher, onRefresh = () => {} } = props;
  const { desc } = voucher.content[i18next.language];
  const { title, details } = voucher.termsAndConditions.content[
    i18next.language
  ];
  const [isConfirmModalVisisble, showConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const onConfirm = () => {
    if (source) {
      setLoading(true);
      source.redeemVoucher({ code: voucher.voucherReference }).then((data) => {
        setLoading(false);
        showConfirm(false);
        onRefresh();
      });
    }
  };

  return (
    <div className="px-3 voucher-details">
      <Row className="pb-3 row-header-wrapper">
        <Col>
          <StoreHeading
            lang={i18next.language}
            subtitle={renderVoucherSubTitle(voucher, t)}
            {...voucher}
          />
          {voucher.status === VoucherStatus.ACTIVE && <hr />}
        </Col>
      </Row>
      {voucher.status === VoucherStatus.EXPIRED && (
        <Row className="row-label py-1 justify-content-center">
          {t('GP_SYSTEMMESSAGES_VOUCHEREXPIRED')}
        </Row>
      )}
      {voucher.status === VoucherStatus.USED && (
        <Row className="row-label py-1 justify-content-center">
          {t('GP_SYSTEMMESSAGES_VOUCHERUSED')}
        </Row>
      )}

      {voucher.status === VoucherStatus.ACTIVE && (
        <>
          {voucher.redeemCode !== '' && <VoucherCode voucher={voucher} />}
          {(voucher.qrCodeUrl !== '' || voucher.barCodeUrl !== '') && (
            <VoucherBarCode voucher={voucher} />
          )}

          <Row className="row-mark-as-read pt-2 mb-2">
            <Col className="text-center">
              <Button
                label={t('GP_VOUCHERDETAILS_USEVOUCHER')}
                variant="outline-primary"
                size="md"
                rounded
                onClick={() => showConfirm(true)}
              />

              <Heading tag="p" className="row-mark-as-read-des py-3">
                {t('GP_VOUCHERDETAILS_DISCLAIMER')}
              </Heading>

              <hr />
            </Col>
          </Row>
        </>
      )}

      <Row className="row-desc py-2">
        <Col>{desc}</Col>
      </Row>
      <Row className="row-terms py-2">
        <Col>
          <Heading tag="p" className="row-terms-heading">
            {title}
          </Heading>
          {details.map((detail, i) => (
            <Heading
              key={`terms-${i}`}
              tag="p"
              className="row-terms-sub"
            >{`- ${detail}`}</Heading>
          ))}
        </Col>
      </Row>

      <DialogPopup
        show={isConfirmModalVisisble}
        onClose={() => showConfirm(false)}
        title={t('GP_SYSTEMMESSAGES_USAGECONFIRMATIONTITLE')}
        subTitle={t('GP_SYSTEMMESSAGES_USAGECONFIRMATIONCONTENT')}
        onConfirm={onConfirm}
        buttonTitle={t('GP_BUYSUBSCRIPTION_CONFIRM')}
        loading={loading}
      />
    </div>
  );
};

export default VoucherDetails;
