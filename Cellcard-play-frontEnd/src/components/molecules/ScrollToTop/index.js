import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      if (history.location.pathname !== '/') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    });
    return () => {
      unlisten();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}

export default withRouter(ScrollToTop);
