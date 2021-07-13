import React from "react";
import { Link } from "react-router-dom";

import Image from "../../atoms/Image";
import Block from "../../molecules/Block";
import P from "../../atoms/P";

const Header = () => {
  const renderLogo = () => {
    return (
      <Link to="/">
        <Block>
          <Image src="/images/logo.png" />
          <P size="18" weight="700" text="Youtube" />
        </Block>
      </Link>
    );
  };

  return (
    <header>
      <Block sort={24} padding={[10]}>
        {renderLogo()}
      </Block>
    </header>
  );
};

export default Header;
