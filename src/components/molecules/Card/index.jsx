import React from "react";
import classNames from "classnames";
import { useHistory } from "react-router-dom";

import styles from "./style.module.css";
import P from "../../atoms/P";
import Image from "../../atoms/Image";
import Block from "../Block";
import Button from "../../atoms/Button";

const Card = ({ data }) => {
  const history = useHistory();
  const classProps = classNames(styles.default);
  return (
    <div className={classProps}>
      <Button
        className="contents"
        onClick={() => history.push(`/video/${data.id}`)}
      >
        <div className={classNames(styles["content-wrapper"])}>
          <Image src={data.snippet.thumbnails.default.url} />
          <Block direction="column" sort={11} margin={[0, 0, 0, 6]}>
            <P size={20} weight={700} text={data.snippet.title} />
            <P
              size={16}
              lineHeight={1.5}
              weight={400}
              text={data.snippet.channelTitle}
            />
          </Block>
        </div>
      </Button>
    </div>
  );
};

export default Card;
