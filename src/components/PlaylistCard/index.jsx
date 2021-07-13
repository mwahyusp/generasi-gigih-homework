import Button from "../ButtonSelect";
import Link from "../ExternalLink";
const PlaylistCard = ({ data }) => {
  const { album, artists, external_urls, name } = data;

  const artistText = artists.map((artist, idx) => {
    const isLast = idx === artists.length - 1;
    const text = isLast ? artist.name : artist.name + ",";
    return (
      <Link href={artist.external_urls.spotify} key={idx}>
        {text}
      </Link>
    );
  });
  return (
    <div className="card">
      <div className="imageContainer">
        <Link href={album.external_urls.spotify}>
          <img
            className="albumArt"
            src={album.images[0].url}
            alt={album.name}
          />
        </Link>
      </div>
      <div className="description">
        <div>
          <h4 className="title">
            <Link href={external_urls.spotify}>{name}</Link> - {artistText}
          </h4>
          <h5 className="albumText">
            <Link href={album.external_urls.spotify}>{album.name}</Link>
          </h5>
        </div>
        <div>
          <Button
            onClick={() => {
              console.log("nice");
            }}
          >
            Select
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
