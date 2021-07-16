import React, { useState, useEffect } from "react";
import ScrollToTop from "../components/molecules/ScrollToTop";
import PopularVideoLists from "../components/templates/PopularVideoLists";

const MainPage = () => {
  const [videoLists, setVideoLists] = useState(null);
  const [isLoadingFetchVideoLists, setIsLoadingFetchVideoLists] =
    useState(false);

  useEffect(() => {
    if (videoLists === null) {
      setIsLoadingFetchVideoLists(true);

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
          console.log(list);
          if (list.error) {
            setVideoLists(null);
          } else {
            setVideoLists(list);
          }
          setIsLoadingFetchVideoLists(false);
        })
        .catch((error) => console.log("error", error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ScrollToTop />
      <PopularVideoLists
        isLoadingFetchVideoLists={isLoadingFetchVideoLists}
        videoLists={videoLists}
      />
    </>
  );
};

export default MainPage;
