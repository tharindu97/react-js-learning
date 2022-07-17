/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Thursday, 13th August 2020 1:41:02 am
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Badge, Container, Row, Col, Spinner } from 'react-bootstrap';
import {
  ROUTE_ME_PLAYPOINTS,
  ROUTE_STORE,
  ROUTE_VOUCHER_LIST,
  ROUTE_PRODUCT_PURCHASE_STATUS,
} from 'constants/Routes';
import Globals from 'constants/Globals';
import Typography from 'components/atoms/Typography';

import ExpandableDescription from 'components/atoms/ExpandableDescription';
import DialogBox from 'components/molecules/DialogBox';
import Modal from 'components/molecules/Modal';
import useMoengage from 'hooks/useMoengage';
import { getMsisdn } from 'utils/authUtils';
import { useTranslation } from 'react-i18next';
import StatusDialog from 'components/molecules/StatusDialog';
import _ from 'lodash';
import TopupWindow from 'components/organisms/ProductDetail/TopupWindow';
import { CELLCARD_TOPUP } from 'constants/Defaults';
import { PLAYPOINTS_ICON } from 'constants/Images';
import toLocal from 'utils/languageOps';
import { toQuery } from 'utils/helpers';
import helpers from '../../../utils/helpers';
import api from '../../../api';
import DenominatorItem from './DenominatorItem';
import './style.scss';
import Lottie from 'components/atoms/Lottie';

const apiSource = _.get(api, 'stores');

const { ModalTypes } = Globals;
const { TransactionStatus } = Globals;
const { ProductPurchasedStatus } = Globals;

const ProductDetail = (props) => {
  const history = useHistory();
  const {
    code,
    content,
    tags = [],
    plans = [],
    imageUrl,
    denominators = [],
    lang,
    isEligible,
  } = props;
  const { t } = useTranslation();
  const { displayName, desc } = content[lang];
  const [showConfirm, showConfirmModal] = useState(false);
  const [SelectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const [MessageObj, setMessageObj] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isStatusDialogVisible, showStatusDialog] = useState(false);
  const [StatusDialogObj, setStatusDialogObj] = useState({});
  const [showTopup, onSetTopup] = useState({ show: false, item: {} });
  const { productPurchase } = useMoengage();

  const onPressItem = (item) => {
    setSelectedItem(item);
    showConfirmModal(true);
  };

  const onItemBuy = (item) => {
    if (props.code === CELLCARD_TOPUP) {
      onSetTopup({ show: true, item });
    } else {
      onPressItem(item);
    }
  };

  const onMobileTopupClose = () => {
    onSetTopup({ show: false, item: {} });
  };

  const showPlayPointsScreen = () => {
    history.push(ROUTE_ME_PLAYPOINTS);
  };
  const backToStoreScreen = () => {
    history.push(ROUTE_STORE);
  };
  const viewVoucherScreen = () => {
    history.push(ROUTE_VOUCHER_LIST);
  };

  const doPurchaseAfterVerify = () => {
    if (SelectedItem !== null) {
      apiSource
        .purchase({
          code: SelectedItem.code,
          query: { receiver: SelectedItem.receiver || getMsisdn() },
        })
        .then((data) => {
          const APIResp = data.data;
          history.push({
            pathname: ROUTE_PRODUCT_PURCHASE_STATUS,
            search: toQuery({ transactionId: APIResp.transactionId }),
          });
        });
    }
  };

  const onConfirmPurchase = () => {
    if (SelectedItem !== null) {
      productPurchase(SelectedItem);
      if (apiSource) {
        setLoading(true);
        apiSource
          .eligible({
            code: SelectedItem.code,
            query: { receiver: SelectedItem.receiver || getMsisdn() },
          })
          .then((data) => {
            onSetTopup({ show: false, item: {} });
            const APIResp = data.data;
            if (APIResp.status === ProductPurchasedStatus.SUFFICIENT) {
              doPurchaseAfterVerify();
            } else if (APIResp.status === ProductPurchasedStatus.INSUFFICIENT) {
              setLoading(false);
              setMessageObj({
                confirmButTitle: t('GP_SYSTEMMESSAGES_BUYPOINTSACTION'),
                onConfirm: () => showPlayPointsScreen(),
                cancelButTitle: t('GP_SYSTEMMESSAGES_CANCEL'),
                onCancel: () => setShowModal(false),
                title: t('GP_SYSTEMMESSAGES_INSUFFICIENTPOINTSTITLE'),
                body: t('GP_SYSTEMMESSAGES_INSUFFICIENTPOINTSCONTENT'),
              });
              setShowModal(true);
            } else if (APIResp.status === ProductPurchasedStatus.INELIGIBLE) {
              setLoading(false);
              setMessageObj({
                cancelButTitle: t('GP_SYSTEMMESSAGES_CANCEL'),
                onCancel: () => setShowModal(false),
                title: 'Ineligible to purchase',
                body: 'Sorry you are ineligible to purchase this item.',
              });
              setShowModal(true);
            } else if (
              APIResp.status === ProductPurchasedStatus.LIMIT_REACHED
            ) {
              setLoading(false);
              setMessageObj({
                confirmButTitle: t('GP_SYSTEMMESSAGES_OKAY'),
                onConfirm: () => setShowModal(false),
                title: toLocal(t('GP_SYSTEMMESSAGES_MAXPURCHASETITLE'), {
                  offer: SelectedItem.content[lang].displayName,
                  limit: APIResp.maxLimit,
                }),
                body: toLocal(t('GP_SYSTEMMESSAGES_MAXPURCHASECONTENT'), {
                  offer: SelectedItem.content[lang].displayName,
                }),
              });
              setShowModal(true);
            }
          });
      }
    }
  };

  return (
    <>
      {showTopup.show && (
        <TopupWindow
          onContinue={onPressItem}
          item={showTopup.item}
          onClose={onMobileTopupClose}
        />
      )}
      {!loading && (
        <>
          <div className="product px-3">
            <div className="product-image mb-2">
              <img src={imageUrl} alt={code} />
            </div>
            <div className="product-title text-center">
              <h3>{displayName}</h3>
            </div>
            <div className="product-tags text-center">
              {tags.map((t, i) => (
                <Badge key={i} variant="secondary">
                  {t.content[lang].displayName}
                </Badge>
              ))}
            </div>
            <div className="product-plans">
              {plans.map((p, i) => (
                <Badge key={i} variant="secondary" className="mt-1">
                  <img
                    src={helpers.getPlanData(p).icon}
                    alt={helpers.getPlanData(p).label}
                  />{' '}
                  {helpers.getPlanData(p).label}
                </Badge>
              ))}
            </div>
            <div className="product-desc">
              <ExpandableDescription text={desc} />
            </div>
          </div>
          {!isEligible && (
            <div className="bg-gray-5 py-2 mt-2">
              <Typography
                translationKey="GP_SYSTEMMESSAGES_INELIGIBLEUSER"
                color="red-1"
                variant="body"
                weight="regular"
                component="div"
                textCenter
              />
            </div>
          )}
          <div className="product px-3">
            <div className="pt-3">
              <div className="offer-top-separator" />
            </div>
            <DenominatorItem
              data={denominators}
              isEligible={isEligible}
              onPressItem={onItemBuy}
            />
          </div>
        </>
      )}
      {loading && (
        <div className="product-detail-loading-container">
          <Lottie />
        </div>
      )}

      {MessageObj.title && (
        <Modal
          show={showModal}
          confirmTitle={MessageObj.confirmButTitle}
          cancelTitle={
            MessageObj.cancelButTitle ? MessageObj.cancelButTitle : ''
          }
          onConfirm={() => MessageObj.onConfirm()}
          onCancel={
            MessageObj.onCancel ? () => MessageObj.onCancel() : () => {}
          }
          ModalTitle={MessageObj.title}
          ModalBody={MessageObj.body}
          IconType="error"
        />
      )}

      {StatusDialogObj.title && (
        <StatusDialog
          show={isStatusDialogVisible}
          confirmTitle={
            StatusDialogObj.confirmButTitle
              ? StatusDialogObj.confirmButTitle
              : ''
          }
          onClickConfirm={
            StatusDialogObj.onClickConfirm
              ? StatusDialogObj.onClickConfirm
              : () => showStatusDialog(false)
          }
          cancelTitle={
            StatusDialogObj.cancelTitle ? StatusDialogObj.cancelTitle : ''
          }
          onClickCancel={
            StatusDialogObj.onClickCancel
              ? StatusDialogObj.onClickCancel
              : () => showStatusDialog(false)
          }
          IconType={StatusDialogObj.IconType}
          Title={StatusDialogObj.title}
          Body={StatusDialogObj.body}
        />
      )}

      <DialogBox
        show={showConfirm}
        submitTitle={t('GP_CONFIRMPURCHASE_CONFIRM')}
        hideClose
        title={t('GP_BUYSUBSCRIPTION_CONFIRMPURCHASE')}
        onClose={() => showConfirmModal(false)}
        onSubmit={() => onConfirmPurchase()}
        className="modal-confirm-purchase"
        backDropEnable
        buttonProps={{ rounded: true, block: true }}
      >
        {SelectedItem !== null && (
          <Container className="pb-3">
            {SelectedItem.receiver && (
              <Row className="my-1">
                <Col className="title-lft" xs={4}>
                  {t('GP_BUY_PHONENUMBER')}:
                </Col>
                <Col className="title-right" xs={8}>
                  {' '}
                  {SelectedItem.receiver}
                </Col>
              </Row>
            )}
            <Row className="my-1">
              <Col className="title-lft" xs={4}>
                {' '}
                {t('GP_CONFIRMPURCHASE_OFFER')}:
              </Col>
              <Col className="title-right" xs={8}>
                {' '}
                {SelectedItem.content[lang].displayName}
              </Col>
            </Row>
            <Row className="my-1">
              <Col className="title-lft" xs={4}>
                {' '}
                {t('GP_CONFIRMPURCHASE_PLAYPOINTS')}:
              </Col>
              <Col className="title-right" xs={8}>
                <div className="d-flex align-items-end">
                  <img
                    className="select-offer-points-img"
                    src={`${process.env.REACT_APP_ASSESTS_URL}${PLAYPOINTS_ICON.src}`}
                    alt={PLAYPOINTS_ICON.alt}
                  />{' '}
                  <div className="ml-1 text-cellcard">
                    {SelectedItem.points.toLocaleString()}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </DialogBox>
    </>
  );
};

export default ProductDetail;
