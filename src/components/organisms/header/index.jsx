import React, { useState } from "react";
import classNames from "classnames";
import { useHistory } from "react-router-dom";

import A from "../../molecules/A";
import Image from "../../atoms/Image";
import Block from "../../molecules/Block";
import SearchForm from "../../molecules/SearchForm";
import P from "../../atoms/P";
import styles from "./style.module.css";

const Header = () => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = (event) => {
    if (event && event.target) {
      setInputValue(event.target.value);
    }
  };

  const renderLogo = () => {
    return (
      <A href="/">
        <Block sort={21}>
          <Image src="/images/logo.png" />
          <P size="18" weight="700" text="Youtube" />
        </Block>
      </A>
    );
  };

  return (
    <header className={classNames(styles.default)}>
      {renderLogo()}
      <SearchForm
        onSubmit={() => history.push(`/search/${inputValue}`)}
        onChangeInput={onChangeInput}
        inputValue={inputValue}
      />
    </header>
  );
};

export default Header;
