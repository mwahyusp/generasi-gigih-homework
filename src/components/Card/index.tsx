import React from "react";
import Style from "./style.module.css";
import Image from "../Image";
import Description from "../Description";
import { Button } from '@material-ui/core';

function Card({title, artist, album, image, handleSelect, btnText}) {
  return (
    <div className={Style.card}>
      <div className={Style.container}>
        <Image src={image} />
        <div className={Style.right}>
          <Description
            title={title}
            artist={artist}
            album={album}
          />
        </div>
      </div>
      <div>
      <Button onClick={handleSelect} className={Style.btnSelect}>
        {btnText}
      </Button>
      </div>
    </div>
  );
}

export default Card;
