import React from "react";
import classNames from "classnames";

import styles from "./style.module.css";

const Image = ({ className, src }) => {
  const classProps = classNames(className, styles.default);

  return <img className={classProps} src={src} alt="" />;
};

export default Image;
