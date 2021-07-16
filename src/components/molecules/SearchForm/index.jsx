import React from "react";
import classNames from "classnames";

import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import styles from "./style.module.css";

const SearchForm = ({ onSubmit, inputValue, onChangeInput }) => {
  return (
    <form onSubmit={onSubmit} className={classNames(styles.default)}>
      <Input
        className="search"
        type="text"
        value={inputValue}
        onChange={onChangeInput}
        placeHolder="Search.."
      />
      <Button
        className="center"
        backgroundColor="#888"
        color="#fff"
        width="50px"
      >
        <i className="fas fa-search"></i>
      </Button>
    </form>
  );
};

export default SearchForm;
