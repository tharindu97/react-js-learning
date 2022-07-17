/*
 * Author: Buwaneka Sumanasekara (bsumanasekara@mitrai.com)
 * Date: Sunday, 23rd August 2020 9:06:21 am
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Sunday, 23rd August 2020 9:12:50 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import Heading from 'components/atoms/Heading';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';

import './style.scss';

const VoucheQRCodeBarcode = (props) => {
  const { voucher } = props;
  const { t } = useTranslation();

  return (
    <Row className="row-redeem-qrcode py-2 ">
      <Col>
        <Heading tag="p" className="row-redeem-qrcode-des text-center">
          {t('GP_VOUCHERDETAILS_QRCODEDESC')}
        </Heading>
        <div className="row-redeem-qrcode-box py-3 d-flex justify-content-center">
          {voucher.qrCodeUrl && <img src={voucher.qrCodeUrl} alt="code-qr" />}
          {voucher.barCodeUrl && (
            <img src={voucher.barCodeUrl} alt="code-bar" />
          )}
        </div>
      </Col>
    </Row>
  );
};

export default VoucheQRCodeBarcode;
