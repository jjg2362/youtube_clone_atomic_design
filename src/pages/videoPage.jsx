import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ScrollToTop from "../components/molecules/ScrollToTop";

import VideoDetail from "../components/templates/VideoDetail";

const VideoPage = () => {
  const { id } = useParams();
  const [isLoadingFetchVideoData, setIsLoadingFetchVideoData] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [isLoadingFetchRelatedVideoLists, setIsLoadingFetchRelatedVideoLists] =
    useState(false);
  const [relatedVideoLists, setRelatedVideoLists] = useState(null);

  useEffect(() => {
    if (videoData === null) {
      setIsLoadingFetchVideoData(true);
      setVideoData(null);

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
          setIsLoadingFetchVideoData(false);
        })
        .catch((error) => {
          console.log("error", error);
          setIsLoadingFetchVideoData(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsLoadingFetchRelatedVideoLists(true);
    console.log(id);

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
        setIsLoadingFetchRelatedVideoLists(false);

        if (result.error) {
          const lists = JSON.parse(result);
          setRelatedVideoLists(lists);
        } else {
          setRelatedVideoLists(null);
          setIsLoadingFetchRelatedVideoLists(false);
        }
      })
      .catch((error) => {
        console.log("error", error);
        setRelatedVideoLists(null);
        setIsLoadingFetchRelatedVideoLists(false);
      });
  }, [id]);

  console.log(relatedVideoLists);

  return (
    <>
      <ScrollToTop />
      <VideoDetail
        id={id}
        isLoadingFetchVideoData={isLoadingFetchVideoData}
        videoData={videoData}
        isLoadingFetchRelatedVideoLists={isLoadingFetchRelatedVideoLists}
        relatedVideoLists={relatedVideoLists}
      />
    </>
  );
};

export default VideoPage;
