import React from "react";
import classNames from "classnames";

import Card from "../../molecules/Card";
import Block from "../../molecules/Block";
import Header from "../../organisms/Header";
import Loading from "../../atoms/Loading";
import styles from "./style.module.css";
import P from "../../atoms/P";

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
        padding={[0, 30]}
        margin={[20, 0, 0, 0]}
      >
        <P weight="700" text={`${searchInput}에 대한 검색 결과입니다.`} />
        <Block direction="column" sort={11} margin={[20, 0, 0, 0]}>
          {isLoadingFetchVideoLists === false ? render() : <Loading />}
        </Block>
      </Block>
    </>
  );
};

export default SearchVideoLists;
