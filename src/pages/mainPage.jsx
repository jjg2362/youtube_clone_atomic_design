import React, { useState, useEffect } from "react";

import Card from "../components/molecules/Card";
import Block from "../components/molecules/Block";
import Header from "../components/organisms/header";

const MainPage = () => {
  const [videoList, setVideoList] = useState(null);

  useEffect(() => {
    if (videoList === null) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBhX89NVZ8IHbbliN5wIJd43b1nLPVf5OU",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          const list = JSON.parse(result);
          setVideoList(list);
        })
        .catch((error) => console.log("error", error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <Block sort={24}>
        {videoList !== null &&
          videoList.items.map((videoItem) => {
            return <Card key={videoItem.id} data={videoItem} />;
          })}
      </Block>
    </div>
  );
};

export default MainPage;
