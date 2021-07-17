import Track from "./Track";
import Link from "../Link";
import style from "./style.module.css";

const Tracks = ({ data }) => {
  const tracks = data.map((track) => {
    const {album: { external_urls, images }} = track;
    const image = images.find((image) => image.width === 300);
    return (
      <li key={track.id}>
        <Link to={external_urls.spotify}>
          <Track image={image.url} title={track.name} artists={track.artists} />
        </Link>
      </li>
    );
  });
  
  return (
    <div>
      <h1>Track List</h1>
      <ul className={style.trackList}>{tracks}</ul>
    </div>
  );
};

export default Tracks;
