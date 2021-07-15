import React from "react";
import classNames from "classnames";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

import styles from "./style.module.css";

const SearchForm = (onSubmit, value, onChangeInput) => {
  return (
    <form onSubmit={onSubmit} className={classNames(styles.default)}>
      <Input type="text" onChange={onChangeInput} value={value} />
      <Button onClick={onSubmit}>
        <i className="fas fa-search"></i>
      </Button>
    </form>
  );
};

export default SearchForm;
