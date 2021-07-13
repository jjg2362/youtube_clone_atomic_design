import React from "react";
import classNames from "classnames";

import styles from "./style.module.css";

const Image = ({ className, src, width = "auto", height = "auto" }) => {
  const classProps = classNames(className, styles.default);
  const styleProps = {
    width,
    height,
  };

  return <img className={classProps} style={styleProps} src={src} alt="" />;
};

export default Image;
