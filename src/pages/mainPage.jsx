import React, { useState, useEffect } from "react";
import ScrollToTop from "../components/molecules/ScrollToTop";
import PopularVideoLists from "../components/templates/PopularVideoLists";

const MainPage = () => {
  const [videoList, setVideoList] = useState(null);

  useEffect(() => {
    if (videoList === null) {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAK0l7LBHVbOAQEihLpXOvPALaRex7IC9Q",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          const list = JSON.parse(result);
          setVideoList(list);
        })
        .catch((error) => console.log("error", error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ScrollToTop />
      {/* <PopularVideoLists /> */}
      {videoList !== null && <PopularVideoLists data={videoList.items} />}
    </>
  );
};

export default MainPage;
