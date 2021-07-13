import React from "react";
import classNames from "classnames";

import styles from "./style.module.css";

const P = ({ className, text, lineHeight = 1.2, size = 16, weight = 400 }) => {
  const classProps = classNames(styles.default, className);
  const styleProps = {
    fontSize: size,
    fontWeight: weight,
    lineHeight: lineHeight,
  };

  return (
    <p className={classProps} style={styleProps}>
      {text}
    </p>
  );
};

export default P;
