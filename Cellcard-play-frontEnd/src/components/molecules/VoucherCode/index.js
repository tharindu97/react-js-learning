/*
 * Author: Buwaneka Sumanasekara (bsumanasekara@mitrai.com)
 * Date: Sunday, 23rd August 2020 9:06:28 am
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Sunday, 23rd August 2020 9:25:32 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import './style.scss';

const VoucherRedeemCode = (props) => {
  const { voucher } = props;
  const { t } = useTranslation();
  return (
    <Row className="row-redeem-code py-2">
      <Col>
        <Heading tag="p" className="row-redeem-code-des pb-3">
          {t('GP_VOUCHERDETAILS_DIGITALCODEDESC')}
        </Heading>
        <div className="row-redeem-code-box py-2">
          <InputGroup className="pb-2 px-2">
            <FormControl value={voucher.redeemCode} readOnly />
            <Button
              label={t('GP_VOUCHERDETAILS_COPY')}
              rounded
              size="sm"
              onClick={() => navigator.clipboard.writeText(voucher.redeemCode)}
            />
          </InputGroup>
          <hr />
          <Button
            className="pt-2"
            label={t('GP_VOUCHERDETAILS_REDEEMPLATFORM')}
            variant="link"
            size="md"
            block
          />
        </div>
      </Col>
    </Row>
  );
};

export default VoucherRedeemCode;
