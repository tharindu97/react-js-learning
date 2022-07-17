/*
 * File: index.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * Copyright 2020 - 2020 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */
import React, { useState, useEffect } from 'react';
import Typography from 'components/atoms/Typography';
import Button from 'components/atoms/ActionItem';
import './style.scss';

const EditName = ({ show, onConfirm, name }) => {
  const [value, setValue] = useState('');
  const [stratedTyping, onTypingStart] = useState(false);

  useEffect(() => {
    setValue(name);
    onTypingStart(false);
  }, [show, name]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    if (!stratedTyping) {
      onTypingStart(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(value);
  };
  return (
    <>
      <Typography
        translationKey="GP_CELLCARDPROFILE_UPDATENAME"
        color="white"
        variant="body"
        weight="regular"
        component="div"
        textCenter
        className="mt-1"
      />
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="px-3 mb-5">
          <div className="d-flex flex-column edit-name-input-container">
            <Typography
              translationKey="GP_CELLCARDPROFILE_FULLNAME"
              color="gray"
              variant="sub1"
              weight="regular"
              component="div"
              className="mb-2"
            />
            <input
              type="text"
              id="full-name"
              aria-describedby="edit name dialog"
              placeholder=""
              value={value}
              onChange={handleInputChange}
              className="edit-name-input"
            />
          </div>
          {stratedTyping && !value && (
            <Typography
              value="Name can not be empty"
              color="red-1"
              variant="sub1"
              weight="regular"
              component="span"
              className="mt-2"
            />
          )}
        </div>
        <Button
          variant="h3"
          weight="semi-bold"
          className="py-3"
          disabled={!value}
          block
          actionType="submit"
          translationKey="GP_SAVE_PROFILENAME"
        />
      </form>
    </>
  );
};

export default EditName;
