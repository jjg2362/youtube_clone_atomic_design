import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ScrollToTop from "../components/molecules/ScrollToTop";
import SearchVideoLists from "../components/templates/SearchVideoLists";

const SearchPage = () => {
  const { search_query } = useParams();

  useEffect(() => {
    if (search_query) {
      console.log(search_query);
    }
  }, [search_query]);

  return (
    <>
      <ScrollToTop />
      <SearchVideoLists searchInput={search_query} />
    </>
  );
};

export default SearchPage;
