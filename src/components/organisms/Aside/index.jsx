import React from "react";
import classNames from "classnames";

import Card from "../../molecules/Card";
import styles from "./style.module.css";
import Loading from "../../atoms/Loading";

const Aside = ({ isLoadingFetchRelatedVideoLists, relatedVideoLists }) => {
  console.log(isLoadingFetchRelatedVideoLists);
  const render = () => {
    return relatedVideoLists.map((item, index) => {
      const isEmpty = Object.keys(item).length === 0;
      return (
        <Card
          key={isEmpty ? index : item.id.videoId}
          item={item}
          href={isEmpty ? index : item.id.videoId}
        />
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
