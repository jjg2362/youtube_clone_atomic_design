import React from "react";
import classNames from "classnames";

import styles from "./style.module.css";

const Input = ({ className, type, value, onChange, placeHolder }) => {
  const classProps = classNames(styles.default, styles[className]);
  return (
    <input
      className={classProps}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
    />
  );
};

export default Input;
