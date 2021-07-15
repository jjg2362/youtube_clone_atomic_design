import React from "react";

const Video = ({ id, width }) => {
  const height = width * 0.5625;
  return (
    <iframe
      width="100%"
      height={height}
      src={`https://www.youtube.com/embed/${id}`}
      title="video_preview"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default Video;
