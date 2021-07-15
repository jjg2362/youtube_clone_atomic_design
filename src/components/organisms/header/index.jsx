import React from "react";
import classNames from "classnames";

import A from "../../molecules/A";
import Image from "../../atoms/Image";
import Block from "../../molecules/Block";
import P from "../../atoms/P";
import SearchForm from "../../molecules/SearchForm";
import styles from "./style.module.css";

const Header = () => {
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
      <SearchForm />
    </header>
  );
};

export default Header;
