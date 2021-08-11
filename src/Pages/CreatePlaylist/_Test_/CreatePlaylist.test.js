import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../Rdux/Store";

import CreatePlaylist from "../CreatePlaylist";

test("Components render correctly", () => {
    render( <
        Provider store = { store } >
        <
        CreatePlaylist / >
        <
        /Provider>
    );

    const inputSearch = screen.getByRole('textbox');

    expect(inputSearch).toBeInTheDocument();
});