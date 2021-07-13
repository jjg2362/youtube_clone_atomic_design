import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import P from "../components/atoms/P";
import Block from "../components/molecules/Block";
import Video from "../components/molecules/Video";
import Header from "../components/organisms/header";

const VideoPage = () => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [relatedVideoLists, setRelatedVideoLists] = useState(null);

  useEffect(() => {
    if (videoData === null) {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyBhX89NVZ8IHbbliN5wIJd43b1nLPVf5OU`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          const data = JSON.parse(result);
          setVideoData(data.items[0].snippet);
        })
        .catch((error) => console.log("error", error));
    }

    if (relatedVideoLists === null) {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&relatedToVideoId=${id}&type=video&key=AIzaSyBhX89NVZ8IHbbliN5wIJd43b1nLPVf5OU`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          const lists = JSON.parse(result);
          setRelatedVideoLists(lists);
        })
        .catch((error) => console.log("error", error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <Video id={id} />
      {videoData && (
        <Block direction="column" sort={21}>
          <P size={22} weight={700} lineHeight={1.5} text={videoData.title} />
          <P
            size={18}
            weight={700}
            lineHeight={1.5}
            text={videoData.channelTitle}
          />
          <P text={videoData.description} />
        </Block>
      )}
    </div>
  );
};

export default VideoPage;
