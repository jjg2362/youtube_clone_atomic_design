import React from "react";
import classNames from "classnames";

import Card from "../../molecules/Card";
import Block from "../../molecules/Block";
import Header from "../../organisms/Header";
import Loading from "../../atoms/Loading";
import styles from "./style.module.css";

const SearchVideoLists = ({
  searchInput,
  isLoadingFetchVideoLists = false,
  videoLists = null,
}) => {
  const lists =
    videoLists === null
      ? Array(25)
          .fill(null)
          .map(() => Object())
      : videoLists;

  const render = () => {
    return lists.map((videoItem) => {
      return <Card key={videoItem.id} item={videoItem} href={videoItem.id} />;
    });
  };

  return (
    <>
      <Header searchInput={searchInput} />
      <Block
        direction="column"
        sort={11}
        padding={[0, 10]}
        margin={[10, 0, 0, 0]}
      >
        {isLoadingFetchVideoLists === false ? render() : <Loading />}
      </Block>
    </>
  );
};

export default SearchVideoLists;
