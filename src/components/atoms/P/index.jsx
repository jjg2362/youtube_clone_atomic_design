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
  const textProp = text === null ? "untitled" : text;

  return (
    <p className={classProps} style={styleProps}>
      {textProp}
    </p>
  );
};

export default P;
