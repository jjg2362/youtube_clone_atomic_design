import React from "react";
import classNames from "classnames";

import Card from "../../molecules/Card";
import styles from "./style.module.css";

const Aside = ({ data }) => {
  return (
    <aside className={classNames(styles.default)}>
      {data
        .filter((v) => Object.keys(v).includes("snippet"))
        .map((item) => {
          return <Card key={item.id.videoId} item={item} />;
        })}
    </aside>
  );
};

export default Aside;
