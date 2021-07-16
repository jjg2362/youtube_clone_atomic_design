import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ScrollToTop from "../components/molecules/ScrollToTop";
import SearchVideoLists from "../components/templates/SearchVideoLists";

const SearchPage = () => {
  const { search_query } = useParams();
  const [videoLists, setVideoLists] = useState(null);
  const [isLoadingFetchVideoLists, setIsLoadingFetchVideoLists] =
    useState(false);

  useEffect(() => {
    if (search_query) {
      setIsLoadingFetchVideoLists(true);
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search_query}&key=AIzaSyAK0l7LBHVbOAQEihLpXOvPALaRex7IC9Q`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          const lists = JSON.parse(result);
          if (lists.error) {
            setVideoLists(null);
          } else {
            setVideoLists(lists);
          }
          setIsLoadingFetchVideoLists(false);
        })
        .catch((error) => console.log("error", error));
    }
  }, [search_query]);

  return (
    <>
      <ScrollToTop />
      <SearchVideoLists
        searchInput={search_query}
        isLoadingFetchVideoLists={isLoadingFetchVideoLists}
        videoLists={videoLists}
      />
    </>
  );
};

export default SearchPage;
