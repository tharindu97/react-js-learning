import React, { memo, useRef, useEffect } from 'react';
import lottie from 'lottie-web';

const Lottie = memo(() => {
  const elm = useRef();
  const animation = useRef();

  useEffect(() => {
    animation.current = lottie.loadAnimation({
      path: '/images/pending.json',
      container: elm.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
  }, []);

  return <div style={{ width: '100vw', height: '100vh' }} ref={elm} />;
});

export default Lottie;
