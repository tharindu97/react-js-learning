/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Friday 31 July 2020 5:00:00 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'components/atoms/ActionItem';

import { BRAND_LOGO } from 'constants/Images';
import GenericDialog from 'components/molecules/GenericDialog';
import { UserContext } from 'providers/User';
import NameCard from 'components/organisms/profile/NameCard';
import { ROUTE_ME_PLAN } from 'constants/Routes';
import EditName from 'components/organisms/profile/EditName';
import Typography from 'components/atoms/Typography';
import { toPhoneNumberString } from 'utils/formatters';
import { useHistory } from 'react-router-dom';
import i18next from 'i18next';
import api from 'api';

import './style.scss';

const MembershipCard = (props) => {
  const [showNameEditDialogue, onNameEditDialogueToggle] = useState(false);
  const [editNameLoading, onSetEditNameLoading] = useState(false);
  const userDetails = useContext(UserContext);
  const { fullName, msisdn } = userDetails.user || {};
  const { updateName } = userDetails;
  const currentLanguage = i18next.language;
  const { t } = useTranslation();
  const history = useHistory();

  const onShowNameEditDialogueToggle = () => onNameEditDialogueToggle(true);
  const onCloseNameEditDialogueToggle = () => {
    onNameEditDialogueToggle(false);
  };

  const onConfirm = (value) => {
    if (value) {
      onSetEditNameLoading(true);
      api.users
        .put({
          msisdn,
          data: {
            fullName: value,
          },
        })
        .then((res) => {
          onCloseNameEditDialogueToggle();
          updateName(value);
          onSetEditNameLoading(false);
        });
    }
  };

  const { plan, user } = props.profileDetails;

  return (
    <>
      {plan ? (
        <div
          className="membership-card"
          onClick={() => {
            history.push(ROUTE_ME_PLAN);
          }}
        >
          <img src={plan.imageUrl} alt="membership-card" />
          <div className="membership-card-top">
            <div className="membership-card-top-logo">
              <img
                alt={BRAND_LOGO.alt}
                src={`${process.env.REACT_APP_ASSESTS_URL}${BRAND_LOGO.src}`}
                className="membership-card-top-logo-image"
              />

              <span className="membership-card-status">
                {t('GP_CELLCARDPROFILE_ACTIVE')}
              </span>
            </div>
            <h2 className="membership-card-top-duration text-uppercase">
              {plan.content[currentLanguage].title}
            </h2>
            <div className="membership-card-validity text-gray">
              {`${t('GP_CELLCARDPROFILE_MAINBALVALIDITY')} `}
              <Typography
                value={plan.expiry}
                color="white"
                variant="sub1"
                weight="semi-bold"
                component="span"
                type="date"
              />
            </div>
          </div>

          <div className="membership-card-bottom">
            <div className="membership-card-bottom-details">
              <div className="membership-card-bottom-details-number">
                {toPhoneNumberString(msisdn)}
              </div>

              <Button
                variant="sub1"
                weight="semi-bold"
                type="whiteUnderlined"
                value={fullName || t('GP_NONCELLCARDPROFILE_ADDNAME')}
                onClick={(e) => {
                  e.stopPropagation();
                  onShowNameEditDialogueToggle();
                }}
              />
            </div>

            <Button
              variant="sub1"
              weight="semi-bold"
              className="py-2 px-4 .profile"
              rounded
              to={ROUTE_ME_PLAN}
              translationKey="GP_CELLCARDPROFILE_LEARNMORE"
            />
          </div>
        </div>
      ) : (
        <NameCard
          name={fullName}
          onEditName={onShowNameEditDialogueToggle}
          phone={toPhoneNumberString(msisdn)}
        />
      )}
      <GenericDialog
        show={showNameEditDialogue}
        onClose={onCloseNameEditDialogueToggle}
        loading={editNameLoading}
        title={t('GP_NONCELLCARDPROFILE_ADDNAME')}
      >
        <EditName
          show={showNameEditDialogue}
          onConfirm={onConfirm}
          name={fullName || ''}
        />
      </GenericDialog>
    </>
  );
};

export default MembershipCard;
