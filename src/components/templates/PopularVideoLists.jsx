import React from "react";

import Card from "../molecules/Card";
import Block from "../molecules/Block";
import Header from "../organisms/header";

const PopularVideoLists = ({ data = null }) => {
  const videoLists =
    data === null
      ? Array(25)
          .fill(null)
          .map(() => Object())
      : data;

  return (
    <div>
      <Header />
      <Block sort={24}>
        {videoLists.map((videoItem) => {
          return <Card key={videoItem.id} item={videoItem} />;
        })}
      </Block>
    </div>
  );
};

export default PopularVideoLists;
