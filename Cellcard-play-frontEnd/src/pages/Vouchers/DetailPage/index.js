/*
 * Author: Buwaneka Sumanasekara (bsumanasekara@mitrai.com)
 * Date: Tuesday, 18th August 2020 10:06:03 am
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Monday, 24th August 2020 11:08:56 am
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import GenericTemplate from 'templates/GenericTemplate';
import VoucherDetail from 'components/organisms/VoucherDetail';
import api from 'api';

import './style.scss';

const DetailPage = () => {
  const { code } = useParams();
  const [voucher, setVoucher] = useState(null);

  const getVoucherDetails = () => {
    api.vouchers.getVoucherDetails({ code }).then((data) => {
      if (data) {
        const dataObj = data.data;

        setVoucher(dataObj);
      }
    });
  };

  useEffect(() => {
    getVoucherDetails();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <GenericTemplate cross>
      {!voucher && (
        <div className="p-5 text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      {voucher && (
        <VoucherDetail
          voucher={voucher}
          onRefresh={() => getVoucherDetails()}
        />
      )}
    </GenericTemplate>
  );
};

export default DetailPage;
