/*
 * Author: Jude Fernando (jfernando@mitrai.com)
 * Date: Thursday, 13th August 2020 12:26:46 pm
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */
/*
 * File: index.js
 * Project: cellcard-play-pwa
 * File Created: Friday, 10th July 2020 12:42:55 am
 * Author: Jerobert (zjerobert@mitrai.com)
 * -----
 * Last Modified: Tuesday, 23rd July 2020 2:04:45 am
 * Modified By: Jude Fernando (jfernando@mitrai.com)
 * -----
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React, { useEffect, useState } from 'react';
import './style.scss';
import Typography from 'components/atoms/Typography';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import DialogBox from '../../molecules/DialogBox';
import Button from '../../atoms/Button';
import api from '../../../api';

const FilterDialog = (props) => {
  const { show, onClose, onChange } = props;
  const lang = i18next.language;
  const { t } = useTranslation();
  const [filters, setFilters] = useState({});

  useEffect(() => {
    api.stores.filters.get().then((data) => {
      if (data) {
        setFilters(data.data);
      }
    });
  }, []);

  const changeFilter = (filter) => {
    if (onChange) {
      onChange(filter);
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <DialogBox
      title={t('GP_STORESUMMARY_FILTER')}
      show={show}
      hideFooter
      onClose={onClose}
      style={{ top: '0px', bottom: '0px', backgroundColor: '#000' }}
    >
      <div className="px-3">
        <div className="store-filters" style={{ paddingBottom: '80px' }}>
          {filters.categories && (
            <>
              <Typography
                translationKey="GP_STORESUMMARY_CATEGORY"
                color="white"
                variant="h3"
                weight="bold"
                component="h3"
                className="mb-3"
              />
              <div className="store-filters-list store-filters-list--category mb-4">
                {filters.categories.map((cat, i) => {
                  return (
                    <Button
                      key={i}
                      radius
                      variant="dark"
                      label={cat.content[lang].displayName || ''}
                      onClick={() => {
                        changeFilter({
                          type: 'category',
                          value: cat.code,
                          label: cat.content[lang].displayName,
                        });
                      }}
                      className="store-filters-list-button-border"
                    />
                  );
                })}
              </div>
            </>
          )}
          {filters.platforms && (
            <>
              {filters.platforms.map((p, j) => (
                <React.Fragment key={j}>
                  <Typography
                    value={`${t('GP_STORESUMMARY_FILTERBY')} ${
                      p.content[lang].displayName
                    }`}
                    color="white"
                    variant="h3"
                    weight="bold"
                    component="h3"
                    className="mb-3"
                  />
                  <div className="store-filters-list store-filters-list--platform mb-4">
                    {p.brands.map((b, k) => (
                      <div
                        key={k}
                        className="store-filters-list-item"
                        onClick={() => {
                          changeFilter({
                            type: 'brand',
                            value: b.code,
                            label: b.content[lang].displayName,
                          });
                        }}
                        role="button"
                        tabIndex={0}
                        onKeyDown={() => {}}
                      >
                        <img
                          src={b.imageUrl}
                          alt={b.content[lang].displayName}
                        />
                      </div>
                    ))}
                  </div>
                </React.Fragment>
              ))}
            </>
          )}
        </div>
      </div>
    </DialogBox>
  );
};

export default FilterDialog;
