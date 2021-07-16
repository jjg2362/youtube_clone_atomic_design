import React, { useRef } from "react";
import classNames from "classnames";

import P from "../../atoms/P";
import Block from "../../molecules/Block";
import Video from "../../molecules/Video";
import styles from "./style.module.css";
import useResize from "../../../hooks/useResize";
import Loading from "../../atoms/Loading";

const VideoContents = ({ id, videoData, isLoadingFetchVideoData }) => {
  const videoRef = useRef(null);
  const videoWidth = useResize(videoRef);

  const render = () => {
    return (
      <>
        <Video id={id} width={videoWidth} />
        <Block direction="column" sort={21}>
          <P
            className="two-line"
            size={22}
            weight={700}
            lineHeight={1.5}
            text={videoData && videoData.title}
          />
          <P
            className="two-line"
            size={18}
            weight={700}
            lineHeight={1.5}
            text={videoData && videoData.channelTitle}
          />
          <P wordBreak="break-all" text={videoData && videoData.description} />
        </Block>
      </>
    );
  };

  return (
    <article className={classNames(styles.default)} ref={videoRef}>
      {isLoadingFetchVideoData === false ? render() : <Loading />}
    </article>
  );
};

export default VideoContents;
