import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import helpers from '../../../utils/helpers';

const Timer = (props) => {
  const { onTimerEnd } = props;
  const { t } = useTranslation();
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter <= 0) {
      onTimerEnd && onTimerEnd();
    }
  }, [counter]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <small className="info-text text-center d-block mt-4">
      {t('GP_BUY_DIDNTGETONEREQUESTSMS', {
        time: `00:${helpers.zeroPad(counter, 2)}`,
      })}
    </small>
  );
};

export default Timer;
