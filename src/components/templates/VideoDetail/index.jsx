import React from "react";
import classNames from "classnames";

import Header from "../../organisms/Header";
import VideoContents from "../../organisms/VideoContents";
import Aside from "../../organisms/Aside";
import Block from "../../molecules/Block";
import styles from "./style.module.css";

const VideoDetail = ({
  id = "",
  isLoadingFetchVideoData = false,
  videoData = null,
  isLoadingFetchRelatedVideoLists = false,
  relatedVideoLists = null,
}) => {
  const videoLists =
    relatedVideoLists === null
      ? Array(25)
          .fill(null)
          .map(() => Object())
      : relatedVideoLists.items;

  return (
    <>
      <Header />
      <Block sort={12} margin={[10, 0, 0, 0]}>
        <VideoContents
          id={id}
          isLoadingFetchVideoData={isLoadingFetchVideoData}
          videoData={videoData}
        />
        <Aside
          isLoadingFetchRelatedVideoLists={isLoadingFetchRelatedVideoLists}
          relatedVideoLists={videoLists}
        />
      </Block>
    </>
  );
};

export default VideoDetail;
