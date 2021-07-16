import React from "react";
import classNames from "classnames";

import Header from "../../organisms/Header";
import VideoContents from "../../organisms/VideoContents";
import Aside from "../../organisms/Aside";
import styles from "./style.module.css";
import Block from "../../molecules/Block";

const VideoDetail = ({
  id,
  isLoadingFetchVideoData,
  videoData,
  isLoadingFetchRelatedVideoLists,
  relatedVideoLists,
}) => {
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
          relatedVideoLists={relatedVideoLists}
        />
      </Block>
    </>
  );
};

export default VideoDetail;
