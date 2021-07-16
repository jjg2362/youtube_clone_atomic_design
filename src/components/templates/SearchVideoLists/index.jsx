import React from "react";
import classNames from "classnames";

import styles from "./style.module.css";
import Header from "../../organisms/Header";

const SearchVideoLists = ({ searchInput }) => {
  return (
    <>
      <Header searchInput={searchInput} />
    </>
  );
};

export default SearchVideoLists;
