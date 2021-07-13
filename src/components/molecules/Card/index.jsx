import React from "react";
import classNames from "classnames";
import { useHistory } from "react-router-dom";

import styles from "./style.module.css";
import P from "../../atoms/P";
import Image from "../../atoms/Image";
import Block from "../Block";
import Button from "../../atoms/Button";

const Card = ({ item }) => {
  const history = useHistory();
  const classProps = classNames(styles.default);
  const data = Object.keys(item).length > 0 ? item : null;

  return (
    <div className={classProps}>
      <Button
        className="contents"
        onClick={() => data && history.push(`/video/${data.id}`)}
      >
        <div className={classNames(styles["content-wrapper"])}>
          <Image
            src={data && data.snippet.thumbnails.default.url}
            width="40%"
          />
          <Block direction="column" sort={11} margin={[0, 0, 0, 6]}>
            <P size={20} weight={700} text={data && data.snippet.title} />
            <P
              size={16}
              lineHeight={1.5}
              weight={400}
              text={data && data.snippet.channelTitle}
            />
          </Block>
        </div>
      </Button>
    </div>
  );
};

export default Card;
