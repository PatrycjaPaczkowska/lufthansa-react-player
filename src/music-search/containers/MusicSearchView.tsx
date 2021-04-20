import React, { useState } from "react";
import { AlbumGrid } from "../components/AlbumGrid";
import { SearchForm } from "../components/SearchForm";
import { useSearchAlbums } from "../../core/hooks/useSearchAlbums";
import { PlaylistsView } from "../../playlists/containers/PlaylistsView";
import Nav from "../../nav/SearchNav";

interface Props {}

/* TODO:
    - DONE W AppComponent - przelaczane widoki jako zakladki do wyboru - "Szukaj Albumow" i "Szukaj Artystow" 
    ( + opcjonalnie zakladka "Playlisty" z PlaylistView ) https://getbootstrap.com/docs/4.6/components/navs/#tabs
    - DONE Wyszukiwarka Artystow - {"q": "Bon Jovi", "type":"artist"}
    - DONE Wykorzystaj ponownie Formularz wyszukiwania na nowym ekranie!
    - DONE Wyniki w formie Card Grid lub Table lub list... (dowolnie)
    
    // Konto Spotify:
    // holoyis165 @ bulkbye . com
    // placki 777
    
    // Nie zmienamy nic w services / auth.

    - https://developer.spotify.com/documentation/web-api/reference/#endpoint-search
*/

export const MusicSearchView = (props: Props) => {
	const [typeOfSearch, setTypeOfSearch] = useState<
		"artist" | "album" | "playlist"
	>("artist");

	const { searchAlbums, cleanResults, isLoading, message, results } = useSearchAlbums(
		"https://api.spotify.com/v1/search",
		typeOfSearch
	);

	return (
		<div>
			<div className="row">
				<div className="col">
					<Nav typeOfSearch={typeOfSearch} setTypeOfSearch={setTypeOfSearch} cleanResults={cleanResults} />
				</div>
			</div>
			<div className="row">
				<div className="col">
					{isLoading && <p className="alert alert-info">Loading</p>}
					{message && <p className="alert alert-danger">{message}</p>}

					<div className="tab-content" id="myTabContent">
						<div
							className={
								typeOfSearch !== "playlist"
									? "tab-pane fade show active"
									: "tab-pane fade "
							}
							id="artist"
							role="tabpanel"
							aria-labelledby="artist"
						>
							<SearchForm onSearch={searchAlbums} mode={typeOfSearch} />
							<AlbumGrid items={results} />
						</div>
						
						<div
							className={
								typeOfSearch === "playlist"
									? "tab-pane fade show active"
									: "tab-pane fade "
							}
							id="playlist"
							role="tabpanel"
							aria-labelledby="playlist"
						>
							<PlaylistsView />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
