import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Video from "../components/molecules/Video";
import Header from "../components/organisms/header";

const VideoPage = () => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState(null);

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
          const list = JSON.parse(result);
          setVideoData(list);
        })
        .catch((error) => console.log("error", error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(videoData);

  return (
    <div>
      <Header />
      <Video id={id} />
    </div>
  );
};

export default VideoPage;
