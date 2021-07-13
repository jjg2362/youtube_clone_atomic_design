import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

const A = ({ href, children }) => {
  const classProps = classNames(styles.default);
  return (
    <Link to={href} className={classProps}>
      {children}
    </Link>
  );
};

export default A;
