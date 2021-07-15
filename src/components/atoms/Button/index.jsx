import React from "react";
import classNames from "classnames";

import styles from "./style.module.css";

const Button = ({
  className,
  onClick,
  children,
  size = 16,
  weight = 400,
  color = "white",
}) => {
  const classProps = classNames(styles.default, styles[className]);
  const styleProps = {
    fontSize: size,
    fontWeight: weight,
    color: color,
  };

  return (
    <button className={classProps} style={styleProps} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
