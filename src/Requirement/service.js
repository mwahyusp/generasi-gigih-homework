export const getTokenFromUrl = hash => {
  const stringAfterHastag = hash.substring(1);
  const paramInUrl = stringAfterHastag.split("&");
  const paramSplitUp = paramInUrl.reduce((acc, currentValue) => {
    const [key, value] = currentValue.split("=");
    acc[key] = value;
    return acc;
  }, {});
  return paramSplitUp;
};

export const filterData = (data, TrackSelected) => {
  const tracks = [...TrackSelected.map(T => Object.assign({}, T)), ...data];
  const filter = [...new Map(tracks.map(t => [t.uri, t])).values()];
  return filter;
};

export const getTrackData = async (query, Token) => {
  const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`;
  if (query) {
    const data = await fetch(url, {
      headers: {
        Authorization: "Bearer " + Token.access_token
      }
    }).then(res => res.json());
    return data;
  }
};

export const createPlaylist = async (e, User, Token, TrackSelected) => {
  const uri = TrackSelected.map(T => T.uri);
  const url = `https://api.spotify.com/v1/users/${User}/playlists`;
  await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + Token.access_token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: e.target[0].value,
      public: false,
      collaborative: false,
      description: e.target[1].value
    })
  })
    .then(res => res.json())
    .then(data => storeTracks(data.id, uri, Token));
};

const storeTracks = async (data, uri, Token) => {
  const url = `https://api.spotify.com/v1/playlists/${data}/tracks?position=0&uris=${uri}`;
  await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + Token.access_token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      uris: uri,
      position: 0
    })
  })
    .then(res => res.json())
    .then(data => console.log(data));
};