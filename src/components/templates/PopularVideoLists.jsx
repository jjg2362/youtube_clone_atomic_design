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
      <Block sort={24} padding={[0, 10]}>
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
