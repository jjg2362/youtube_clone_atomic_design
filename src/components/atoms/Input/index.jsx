import React from "react";
import classNames from "classnames";

import styles from "./style.module.css";

const Input = ({ type, value, onChange }) => {
  return (
    <input
      className={classNames(styles.default)}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
