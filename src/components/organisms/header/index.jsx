import React from "react";

import A from "../../molecules/A";
import Image from "../../atoms/Image";
import Block from "../../molecules/Block";
import P from "../../atoms/P";

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
    <header>
      <Block sort={24} padding={[10]}>
        {renderLogo()}
      </Block>
    </header>
  );
};

export default Header;
