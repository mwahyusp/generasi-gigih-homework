import React from "react";
import "./Card.css";
import Image from "../Image";
import Button from "../Button";
import Description from "../Description";

function Card({title, artist, album, image, handleSelect, btnText}) {
  return (
    <div className="card">
      <div className="container">
        <Image src={image} />
        <div className="right">
          <Description
            title={title}
            artist={artist}
            album={album}
          />
          <div onClick={handleSelect}>
            <Button text={btnText} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;