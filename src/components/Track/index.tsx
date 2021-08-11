/* eslint-disable react/jsx-no-undef */
import React from "react";
import Style from "./style.module.css";
import Image from "../Image";
import Description from "../Description";
// import { Button } from "@chakra-ui/react";

interface CardType {
  title: string;
  artist: string;
  album: string;
  image: string;
  handleSelect: React.MouseEventHandler<HTMLButtonElement>;
  btnText: string;
}

function Track({
  title,
  artist,
  album,
  image,
  handleSelect,
  btnText,
}: CardType) {
  return (
    <div className={Style.card}>
      <div className={Style.container}>
        <Image src={image} data-testid="imageTrack" />
        <div className={Style.right}>
          <Description title={title} artist={artist} album={album} />
        </div>
      </div>
      <div className={Style.btn}>
        <Button
          size="sm"
          background="rgb(209, 211, 240)"
          color="white"
          fontWeight="700"
          onClick={handleSelect}
          data-testid="buttonTrack"
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
}

export default Track;
