import React, { useState, useEffect } from "react";

import Header from "../components/organisms/header";

const VideoPage = () => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    if (videoData === null) {
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
          setVideoData(list);
        })
        .catch((error) => console.log("error", error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <span>비디오</span>
    </div>
  );
};

export default VideoPage;
