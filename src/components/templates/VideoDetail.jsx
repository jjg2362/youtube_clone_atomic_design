import React from "react";

import P from "../atoms/P";
import Block from "../molecules/Block";
import Video from "../molecules/Video";
import Header from "../organisms/header";

const VideoDetail = ({ id, videoData }) => {
  return (
    <>
      <Header />
      <Video id={id} />
      <Block direction="column" sort={21}>
        <P size={22} weight={700} lineHeight={1.5} text={videoData.title} />
        <P
          size={18}
          weight={700}
          lineHeight={1.5}
          text={videoData.channelTitle}
        />
        <P text={videoData.description} />
      </Block>
    </>
  );
};

export default VideoDetail;
