import React from "react";
import classNames from "classnames";

import styles from "./style.module.css";

const Image = ({ className, src, width = "auto", height = "auto" }) => {
  const classProps = classNames(className, styles.default);
  const styleProps = {
    width,
    height,
  };
  const srcProps = src === null ? "/images/logo.png" : src;

  return (
    <img className={classProps} style={styleProps} src={srcProps} alt="" />
  );
};

export default Image;
