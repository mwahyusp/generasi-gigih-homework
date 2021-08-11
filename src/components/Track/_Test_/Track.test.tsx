import { render, screen, cleanup } from "@testing-library/react";
import Track from "../index";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

test("Component Track render correctly", () => {
  render(
    <Track
      title="Bohemian Rhapsody - Remastered 2011"
      artist="Queen"
      album="A Night At The Opera (2011 Remaster)"
      image="https://i.scdn.co/image/ab67616d0000b273e319baafd16e84f0408af2a0"
      handleSelect={() => {
        console.log("Selected");
      }}
      btnText="Select"
    />
  );

  const buttonTrack = screen.getByTestId("buttonTrack");
  const TrackTitle = screen.getByTestId("trackTitle");
  const albumArtist = screen.getByTestId("albumArtist");

  expect(buttonTrack).toHaveTextContent("Select");
  expect(TrackTitle).toHaveTextContent("Bohemian Rhapsody - Remastered 2011");
  expect(albumArtist).toHaveTextContent(
    "Queen, A Night At The Opera (2011 Remaster)"
  );
});

test("button select clicked", () => {
  render(
    <Track
      title="Bohemian Rhapsody - Remastered 2011"
      artist="Queen"
      album="A Night At The Opera (2011 Remaster)"
      image="https://i.scdn.co/image/ab67616d0000b273e319baafd16e84f0408af2a0"
      handleSelect={() => console.log("Selected")}
      btnText="Select"
    />
  );
  const buttonTrack = screen.getByTestId("buttonTrack");
  userEvent.click(buttonTrack);
  expect(buttonTrack).toBeInTheDocument();
});
