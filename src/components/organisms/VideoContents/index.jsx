import React from "react";
import classNames from "classnames";

import P from "../../atoms/P";
import Block from "../../molecules/Block";
import Video from "../../molecules/Video";
import styles from "./style.module.css";

const VideoContents = ({ id, videoData }) => {
  return (
    <article className={classNames(styles.default)}>
      <Video id={id} />
      <Block direction="column" sort={21}>
        <P
          className="two-line"
          size={22}
          weight={700}
          lineHeight={1.5}
          text={videoData.title}
        />
        <P
          className="two-line"
          size={18}
          weight={700}
          lineHeight={1.5}
          text={videoData.channelTitle}
        />
        <P wordBreak="break-all" text={videoData.description} />
      </Block>
    </article>
  );
};

export default VideoContents;
