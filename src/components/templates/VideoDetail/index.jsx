import React from "react";
import classNames from "classnames";

import Header from "../../organisms/header";
import VideoContents from "../../organisms/VideoContents";
import Aside from "../../organisms/Aside";
import styles from "./style.module.css";

const VideoDetail = ({ id, videoData, relatedVideoLists }) => {
  return (
    <>
      <Header />
      <div className={classNames(styles.container)}>
        <VideoContents id={id} videoData={videoData} />
        <Aside data={relatedVideoLists} />
      </div>
    </>
  );
};

export default VideoDetail;
