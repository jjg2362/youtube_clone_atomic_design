import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { search_query } = useParams();

  useEffect(() => {
    if (search_query) {
      console.log(search_query);
    }
  }, [search_query]);

  return <></>;
};

export default SearchPage;
