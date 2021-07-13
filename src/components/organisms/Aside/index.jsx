import React from "react";
import classNames from "classnames";

import Block from "../../molecules/Block";
import Card from "../../molecules/Card";
import styles from "./style.module.css";

const Aside = ({ data }) => {
  const classProps = classNames(styles.default);

  return (
    <aside className={classProps}>
      <Block direction="column">
        {data.map((item) => {
          return <Card item={item} />;
        })}
      </Block>
    </aside>
  );
};

export default Aside;
