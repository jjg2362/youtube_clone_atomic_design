import React from "react";
import classNames from "classnames";

import Card from "../../molecules/Card";
import styles from "./style.module.css";
import Loading from "../../atoms/Loading";

const Aside = ({ isLoadingFetchRelatedVideoLists, relatedVideoLists }) => {
  const render = () => {
    return relatedVideoLists.items
      .filter((v) => Object.keys(v).includes("snippet"))
      .map((item) => {
        return (
          <Card key={item.id.videoId} item={item} href={item.id.videoId} />
        );
      });
  };

  return (
    <aside className={classNames(styles.default)}>
      {isLoadingFetchRelatedVideoLists === false && relatedVideoLists ? (
        render()
      ) : (
        <Loading />
      )}
    </aside>
  );
};

export default Aside;
