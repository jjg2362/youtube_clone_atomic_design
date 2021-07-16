import React from "react";
import classNames from "classnames";

import Card from "../../molecules/Card";
import Block from "../../molecules/Block";
import Header from "../../organisms/Header";
import styles from "./style.module.css";
import Loading from "../../atoms/Loading";

const PopularVideoLists = ({
  isLoadingFetchVideoLists = false,
  videoLists = null,
}) => {
  const lists =
    videoLists === null
      ? Array(25)
          .fill(null)
          .map(() => Object())
      : videoLists.items;

  const render = () => {
    return lists.map((item) => {
      return <Card className="half" key={item.id} item={item} href={item.id} />;
    });
  };

  return (
    <div className={classNames(styles.default)}>
      <Header />
      <Block sort={14} padding={[0, 10]} margin={[10, 0, 0, 0]}>
        {isLoadingFetchVideoLists === false ? render() : <Loading />}
      </Block>
    </div>
  );
};

export default PopularVideoLists;
