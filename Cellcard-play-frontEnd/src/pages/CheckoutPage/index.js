import React, { useState, useEffect, useContext } from 'react';
import BoxPlanCheckout from 'components/molecules/BoxPlanCheckout';
import BoxListing from 'components/molecules/BoxListing';
import ItemPayment from 'components/molecules/ItemPayment';
import './style.scss';
import DialogBox from 'components/molecules/DialogBox';
import HiddenForm from 'components/molecules/HiddenForm';
import { UserContext } from 'providers/User';
import { useHistory } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import useQueryParams from 'hooks/useQueryParams';
import { toPhoneNumberString } from 'utils/formatters';
import Typography from 'components/atoms/Typography';
import { SVG_INFO } from 'constants/Images';
import GenericTemplate from 'templates/GenericTemplate';
import Modal from 'components/molecules/Modal';
import toLocal from 'utils/languageOps';
import i18next from 'i18next';
import api from 'api';
import { PLAN } from 'constants/Globals';
import { getMsisdn } from 'utils/authUtils';
import { useTranslation } from 'react-i18next';
import useMoengage from 'hooks/useMoengage';
import { ROUTE_PLAYPOINTS, ROUTE_PURCHASE_STATUS } from 'constants/Routes';
import _ from 'lodash';
import useAuthorization from 'hooks/useAuthorization';
import { PAY_WITH_MAIN_BALANCE } from 'constants/Authorization';
import ReferralCode from 'components/organisms/Referrals/ReferralCode';
import Button from '../../components/atoms/Button';

const BuyPlan = () => {
  const cmb = {
    imageUrl:
      'https://cellcard-play-public-dev.s3-ap-southeast-1.amazonaws.com/assets/payment/cellcard/cc_mainbalance.png',
    paymentGateway: 'cellcard',
    transactionType: 'CELLCARD_BALANCE',
    content: {
      en: { title: 'Cellcard Balance', desc: getMsisdn() },
      km: { title: 'ß×Åß×Âß×ÿß×£ß×©ß×ä', desc: getMsisdn() },
      zh: { title: 'ÚÇÜÞ┐çWing', desc: getMsisdn() },
    },
  };
  const [paymentsTypes, setPaymentsTypes] = useState([]);
  const [showModal, onShowModal] = useState(false);
  const [productData, setProductData] = useState({});
  const [hasDataLoaded, onDataLoad] = useState(false);
  const [selectedPayment, onSelectPayment] = useState({});
  const [isFormDataLoading, onFormDataLoad] = useState(false);
  const [formData, OnLoadFormData] = useState({});
  const userDetails = useContext(UserContext);
  const { querySearch } = useQueryParams();
  const currentLanguage = i18next.language;
  const history = useHistory();
  const { msisdn } = userDetails.user || {};
  const { itemCheckout } = useMoengage();
  const isAuthorizedTo = useAuthorization();
  const canPurchaseWithBalance = isAuthorizedTo(PAY_WITH_MAIN_BALANCE);
  const [promoCode, setPromoCode] = useState(null);
  const { t } = useTranslation();

  const isPlan = querySearch.productType === PLAN;
  const isForOther = Boolean(querySearch.receiver);
  useEffect(() => {
    async function fetchData() {
      try {
        let [productDetails, paymentTypes] = await Promise.all([
          api.orders.product(
            `productCode=${querySearch.productCode}&productType=${querySearch.productType}`,
          ),
          api.orders.paymentTypes(),
        ]);
        productDetails = _.get(productDetails, 'data', []);
        paymentTypes = _.get(paymentTypes, 'data', []);
        if (querySearch.productType === 'PLAN' && canPurchaseWithBalance) {
          paymentTypes = [cmb, ...paymentTypes];
        }
        setProductData(productDetails);
        setPaymentsTypes(paymentTypes);
        onDataLoad(true);
        itemCheckout({
          type: productDetails.type,
          value: productDetails.points,
          price: productDetails.value,
          item: productDetails.content[currentLanguage].displayName,
          offerURL: `${process.env.REACT_APP_API_ENDPOINT}${ROUTE_PLAYPOINTS}`,
        });
      } catch (error) {
        onDataLoad(true);
      }
    }

    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onPaymentTileClick = (selectedType) => {
    onSelectPayment(selectedType);
    onFormDataLoad(true);
    OnLoadFormData({});

    const apiCallType =
      selectedType.paymentGateway === 'cellcard'
        ? 'cellcardInitPurchase'
        : 'paymentDetails';
    api.orders[apiCallType]({
      productCode: querySearch.productCode,
      productType: querySearch.productType,
      msisdn: querySearch.receiver ? `+855${querySearch.receiver}` : msisdn,
      transactionType: selectedType.transactionType,
      gateway: selectedType.paymentGateway,
      referralCode: promoCode,
    }).then(
      (data) => {
        OnLoadFormData(data.data);
        onFormDataLoad(false);
        if (!(data.data.actionUrl || data.data.orderId)) {
          onShowModal(true);
          onSelectPayment({});
        }
      },
      () => {
        onSelectPayment({});
      },
    );
  };

  const onCellcardPayment = () => {
    const { orderId } = formData;
    const paymentType = 'CELLCARD_BALANCE';
    const productType = 'PLAN';
    api.orders
      .cellcardPurchase({ orderId, paymentType, productType })
      .then(() => {
        history.push(`${ROUTE_PURCHASE_STATUS}?transactionId=${orderId}`);
      });
  };
  const paymentsTypeList = paymentsTypes.map((paymentType) => {
    return (
      <BoxListing
        key={paymentType.transactionType}
        action={onPaymentTileClick}
        data={paymentType}
      >
        <ItemPayment item={paymentType} />
      </BoxListing>
    );
  });

  return (
    <>
      <GenericTemplate cross titleTranslateKey="GP_CHECKOUT_TITLE">
        {hasDataLoaded ? (
          <div className="px-3">
            <div className="buy-plan">
              <BoxPlanCheckout
                plan={{
                  title: productData.content[currentLanguage].displayName,
                  price: productData.value,
                  isPlan: querySearch.productType === 'PLAN',
                  validity: productData.validity,
                }}
              />
              <ReferralCode
                promoCode={promoCode}
                setPromoCode={setPromoCode}
                planCode={querySearch.productType}
                receiver={
                  querySearch.receiver ? `+855${querySearch.receiver}` : msisdn
                }
              />
              <h4>{t('GP_CHECKOUT_CHOOSEPAYMENTMETHOD')}</h4>
              {paymentsTypes.length ? (
                paymentsTypeList
              ) : (
                <div className="buy-plan-spinner d-flex justify-content-center p-5">
                  <Spinner animation="border" variant="primary" />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="buy-plan-spinner d-flex justify-content-center pt-5">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
      </GenericTemplate>
      {hasDataLoaded && (
        <DialogBox
          className="otp-login"
          show={Boolean(
            (formData.orderId || formData.actionUrl) &&
              selectedPayment.paymentGateway,
          )}
          onClose={() => onSelectPayment({})}
          title={t('GP_BUYSUBSCRIPTION_CONFIRMPURCHASE')}
          submitTitle=""
          onSubmit={() => {}}
          loading={isFormDataLoading}
          hideFooter
        >
          <div className="buy-plan-dialogue-summary">
            <div className="buy-plan-dialogue-summary-left">
              <div className="buy-plan-dialogue-summary-left-item">
                {t('GP_BUYSUBSCRIPTION_OFFER')}:
              </div>
              <div className="buy-plan-dialogue-summary-left-item">
                {t('GP_BUYSUBSCRIPTION_FOR')}:
              </div>
              {promoCode && (
                <div className="buy-plan-dialogue-summary-left-item">
                  {t('GP_INPUTREFERRAL_CODE')}:
                </div>
              )}
              <div className="buy-plan-dialogue-summary-left-item">
                {t('GP_BUYSUBSCRIPTION_PAYMENTMETHOD')}:
              </div>
              <div className="buy-plan-dialogue-summary-left-item">
                {t('GP_BUYSUBSCRIPTION_PRICE')}:
              </div>
            </div>
            <div className="buy-plan-dialogue-summary-right">
              <div className="buy-plan-dialogue-summary-right-item">
                {productData.content.en.displayName}
              </div>
              <div className="buy-plan-dialogue-summary-right-item">
                {toPhoneNumberString(
                  querySearch.receiver ? `+855${querySearch.receiver}` : msisdn,
                )}
              </div>
              {promoCode && (
                <div className="buy-plan-dialogue-summary-right-item">
                  {promoCode}
                </div>
              )}
              <div className="buy-plan-dialogue-summary-right-item">
                {selectedPayment.content && selectedPayment.content.en.title}
              </div>
              <div className="buy-plan-dialogue-summary-right-item text-cellcard ">
                ${productData.value}
              </div>
            </div>
          </div>
          {selectedPayment.paymentGateway === 'cellcard' ? (
            <div className="px-3 pt-2 pb-3">
              <Button
                translationKey="GP_BUYSUBSCRIPTION_CONFIRM"
                rounded
                block
                onClick={onCellcardPayment}
              />
            </div>
          ) : (
            <div className="">
              {isPlan && (
                <div className="px-3 pt-1 pb-4 d-flex">
                  <div className="checkout-page-info-icon flex-shrink-0">
                    <img
                      src={SVG_INFO.src}
                      alt={SVG_INFO.alt}
                      className="w-100"
                    />
                  </div>
                  <Typography
                    value={`${toLocal(
                      t(
                        isForOther
                          ? 'GP_BUYSUBSCRIPTION_TOPUPOTHERSCONDITION'
                          : 'GP_BUYSUBSCRIPTION_TOPUPSELFCONDITION',
                      ),
                      {
                        msisdn: querySearch.receiver
                          ? `+855${querySearch.receiver}`
                          : msisdn,
                      },
                    )}${t('GP_BUYSUBSCRIPTION_HAVENOTPENDINGRENEWAL')}`}
                    color="gray"
                    variant="sub1"
                    weight="regular"
                    component="div"
                    className="ml-2"
                  />
                </div>
              )}
              <div className="buy-plan-dialogue-form">
                <HiddenForm formData={formData} />
              </div>
            </div>
          )}
        </DialogBox>
      )}

      {showModal && (
        <Modal
          show
          confirmTitle={t('GP_SYSTEMMESSAGES_OKAY')}
          onConfirm={() => {
            onShowModal(false);
          }}
          ModalTitle={t('GP_MAINBALANCE_BALANCEINSUFFICIENTMSGTITLE')}
          ModalBody={t('GP_MAINBALANCE_BALANCEINSUFFICIENTMSG')}
          IconType="error"
        />
      )}

      {isFormDataLoading && (
        <div className="buy-plan-spinner-full position-fixed d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </>
  );
};

export default BuyPlan;
