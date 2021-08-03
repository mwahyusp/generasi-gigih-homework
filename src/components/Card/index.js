import React from "react";
import Style from "./style.module.css";
import Image from "../Image";
import Description from "../Description";

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
      <div onClick={handleSelect} className={Style.btnSelect}>
        {btnText}
      </div>
    </div>
  );
}

export default Card;
