import React from "react";
import classNames from "classnames";

import styles from "./style.module.css";

const Button = ({
  className,
  onClick,
  children,
  size = 16,
  weight = 400,
  color = "#000",
  backgroundColor = "none",
  width = "auto",
}) => {
  const classProps = classNames(styles.default, styles[className]);
  const styleProps = {
    fontSize: size,
    fontWeight: weight,
    color: color,
    backgroundColor: backgroundColor,
    width: width,
  };

  return (
    <button className={classProps} style={styleProps} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
