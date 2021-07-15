import React from "react";
import classNames from "classnames";

import Header from "../../organisms/header";
import VideoContents from "../../organisms/VideoContents";
import Aside from "../../organisms/Aside";
import styles from "./style.module.css";
import Loading from "../../atoms/Loading";

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
      <div className={classNames(styles.container)}>
        <VideoContents
          id={id}
          isLoadingFetchVideoData={isLoadingFetchVideoData}
          videoData={videoData}
        />
        <Aside
          isLoadingFetchRelatedVideoLists={isLoadingFetchRelatedVideoLists}
          relatedVideoLists={relatedVideoLists}
        />
      </div>
    </>
  );
};

export default VideoDetail;
