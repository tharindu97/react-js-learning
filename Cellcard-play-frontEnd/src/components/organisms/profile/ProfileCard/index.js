/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Friday 31 July 2020 5:00:00 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React from 'react';
import Card from 'components/atoms/Card';
import Button from 'components/atoms/ActionItem';
import ImageRounded from 'components/atoms/ImageRounded';
import Icon from 'components/atoms/Icon';
import Typography from 'components/atoms/Typography';
import { useHistory } from 'react-router-dom';
import './style.scss';

const ProfileCard = ({
  children,
  title,
  subTitle,
  btnText,
  subButtonText,
  icon,
  link,
  subLink,
}) => {
  const history = useHistory();
  return (
    <div
      className="link-nulled"
      onClick={() => history.push(link)}
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
    >
      <Card>
        <div className="d-flex align-items-center ">
          {icon && (
            <div className="pr-2">
              <ImageRounded src={icon} size={50} roundedFull />
            </div>
          )}
          <div className="w-100">
            <div className="d-flex align-items-center justify-content-between">
              <Typography
                value={title}
                color="cellcard"
                variant="h3"
                weight="semi-bold"
                component="h3"
              />
              {subButtonText && (
                <Button
                  content={
                    <div className="d-flex align-items-center">
                      <Typography
                        value={subButtonText}
                        color="cta-blue"
                        variant="h3"
                        weight="semi-bold"
                        component="div"
                      />
                      <Icon icon="chevron_right" />
                    </div>
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    history.push(subLink);
                  }}
                  type="content"
                />
              )}
            </div>
            {subTitle && (
              <Typography
                value={subTitle}
                color="white"
                variant="body"
                weight="semi-bold"
                component="div"
                className="mt-1"
              />
            )}
          </div>
        </div>
        <div className="profile-card-body">
          <div className="profile-card-body-description">{children}</div>

          <Button
            variant="sub1"
            weight="semi-bold"
            className="py-2  .profile"
            rounded
            value={btnText}
          />
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;
