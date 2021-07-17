/* eslint-disable jsx-a11y/anchor-is-valid */
import Card from "../../Card";
import Link from "../../Link";
import style from "./style.module.css";


const Track = (props) => {
  const artists = props.artists.map((artist, index) => {
      const isLast = index === props.artists.length - 1;
      return (
        <Link to={artist.external_urls.spotify} key={artist.id}>
          {isLast ? artist.name : `${artist.name},`}
        </Link>
      );
    });

  return (
    <Card>
      <img className={style.image} src={props.image} alt='#'width="240px" />
      <a className={style.title} href="#">
        {props.title}
      </a>
      <a className={style.artist}>{artists}</a>
    </Card>
  );
};

export default Track;
