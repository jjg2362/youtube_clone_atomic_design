import React, { useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";

const ScrollToTop = () => {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return <></>;
};

export default withRouter(ScrollToTop);
