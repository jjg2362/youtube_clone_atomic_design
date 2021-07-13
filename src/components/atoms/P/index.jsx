import React from "react";
import classNames from "classnames";

import styles from "./style.module.css";

const P = ({ className, text, size = 16, weight = 400 }) => {
  const classProps = classNames(styles.default, className);
  const style = {
    fontSize: size,
    fontWeight: weight,
  };

  return (
    <p className={classProps} style={style}>
      {text}
    </p>
  );
};

export default P;
