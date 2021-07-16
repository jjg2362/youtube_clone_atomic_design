import React from "react";
import classNames from "classnames";

import Card from "../../molecules/Card";
import Block from "../../molecules/Block";
import Header from "../../organisms/Header";
import styles from "./style.module.css";

const PopularVideoLists = ({ data = null }) => {
  const videoLists =
    data === null
      ? Array(25)
          .fill(null)
          .map(() => Object())
      : data;

  return (
    <div className={classNames(styles.default)}>
      <Header />
      <Block sort={14} padding={[0, 10]} margin={[10, 0, 0, 0]}>
        {videoLists.map((videoItem) => {
          return (
            <Card
              className="half"
              key={videoItem.id}
              item={videoItem}
              href={videoItem.id}
            />
          );
        })}
      </Block>
    </div>
  );
};

export default PopularVideoLists;
