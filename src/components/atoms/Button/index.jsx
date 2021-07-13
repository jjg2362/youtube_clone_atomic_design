import React from "react";
import classNames from "classnames";

import styles from "./style.module.css";

const Button = ({ className, onClick, children }) => {
  const classProps = classNames(styles.default, className);

  return (
    <button className={classProps} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
