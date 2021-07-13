import React from "react";
import classNames from "classnames";

import Block from "../../molecules/Block";
import Card from "../../molecules/Card";
import styles from "./style.module.css";

const Aside = ({ data }) => {
  return (
    <aside className={classNames(styles.default)}>
      {data.map((item) => {
        return <Card item={item} />;
      })}
    </aside>
  );
};

export default Aside;
