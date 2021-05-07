import {
	cleanup,
	getByRole,
	render,
	screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import React from "react";
import { Playlist } from "../../model/Playlist";
import { PlaylistList } from "./PlaylistList";

const playlistsMock: Playlist[] = [
	{ id: "123", name: "Playlista A", public: false, description: "" },
	{ id: "234", name: "Playlista B", public: false, description: "" },
	{ id: "345", name: "Playlista C", public: false, description: "" },
];

const setup = ({
	playlists = playlistsMock,
	selectedId,
}: {
	playlists?: Playlist[];
	selectedId?: Playlist["id"];
}) => {
	const selectSpy = jest.fn();
	const removeSpy = jest.fn();

	render(
		<PlaylistList
			playlists={playlists}
			onSelected={selectSpy}
			selectedId={selectedId}
			onRemove={removeSpy}
		/>
	);
	return { playlists, selectSpy, selectedId, removeSpy };
};

describe("PlaylistList", () => {
	test("shows No playlists when no playlist", () => {
		setup({ playlists: [] });
		expect(screen.queryByRole("tab")).not.toBeInTheDocument();
		screen.getByText("No playlists");

		cleanup();

		const { playlists } = setup({});
		expect(screen.queryAllByRole("tab")).toHaveLength(playlists.length);
		expect(screen.queryByText("No playlists")).not.toBeInTheDocument();
	});

	test("show list of playlist", () => {
		const { playlists } = setup({});
		expect(screen.queryAllByRole("tab")).toHaveLength(playlists.length);
	});

	test("emits select event when select was clicked", () => {
		const { playlists, selectSpy } = setup({});

		userEvent.click(screen.getByText(playlists[0].name, { exact: false }));

		// expect(selectSpy).toHaveBeenCalledTimes(1);
		expect(selectSpy).toHaveBeenCalledWith(playlists[0].id);
	});

	test("emits highlight on selected playlist", () => {
		setup({ selectedId: "" });
		const noItems = screen.queryAllByRole("tab", { selected: true });
		expect(noItems).toHaveLength(0);
		cleanup();

		const { playlists } = setup({ selectedId: "123" });

		const items = screen.queryAllByRole("tab", { selected: true });
		expect(items).toHaveLength(1);
		expect(playlists[0].id).toEqual("123");
		expect(items[0]).toHaveTextContent(playlists[0].name);
		expect(items[0]).toHaveClass("active");
	});

	test("emit remove event when remove button was clicked", () => {
		const { removeSpy, playlists } = setup({});
		const item = screen.getByText(playlists[0].name, { exact: false });
		const removeBtn = getByRole(item, "button", { name: "remove" });

		userEvent.click(removeBtn);
		expect(removeSpy).toHaveBeenCalledWith(playlists[0].id);
	});
});