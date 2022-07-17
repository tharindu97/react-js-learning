/*
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Date: Tuesday, 12th August 2020 12:00 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
import React from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';

const HiddenForm = ({ formData }) => {
  const { t } = useTranslation();
  return (
    <form
      method="post"
      name="ePayment"
      action={formData.actionUrl}
      className="hidden-form"
    >
      {Object.entries(formData)
        .filter(([a]) => a !== 'actionUrl')
        .map(([key, value]) => (
          <input type="hidden" name={key} value={value} key={key} />
        ))}

      <input
        type="submit"
        value={t('GP_BUYSUBSCRIPTION_CONFIRM')}
        name="Submit"
        className="hidden-form-submit"
      />
    </form>
  );
};

export default HiddenForm;
