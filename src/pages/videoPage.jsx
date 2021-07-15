import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ScrollToTop from "../components/molecules/ScrollToTop";

import VideoDetail from "../components/templates/VideoDetail";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
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
  }, [id]);

  return (
    <>
      <ScrollToTop />
      {videoData && relatedVideoLists && (
        <VideoDetail
          id={id}
          videoData={videoData}
          relatedVideoLists={relatedVideoLists.items}
        />
      )}
    </>
  );
};

export default VideoPage;
