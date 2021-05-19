import * as React from "react";
import { PagingObject, SimpleTrack, Track } from "../../model/Search";

export interface TracksListAlbumProps {
	tracks: PagingObject<Track> | undefined;
   addTrackToPlaylist: (id: SimpleTrack) => void;
}

const TracksListAlbum = ({ tracks, addTrackToPlaylist }: TracksListAlbumProps) => {
	return (
		<>
			{tracks?.items.map((track, id) => {
				const minutes = Math.floor(track.duration_ms / 60000);
				const seconds = ((track.duration_ms % 60000) / 1000).toFixed(0);
				return (
					<tr key={track.id}>
						<td scope="row">{id + 1}.</td>
						<td>{track.name}</td>
						<td>
							{minutes}:{Number(seconds) < 10 ? "0" : ""}
							{seconds}
						</td>
						<td>
							<button
								className="btn btn-outline-success"
								onClick={() => addTrackToPlaylist(track)}
							>
								+
							</button>
						</td>
					</tr>
				);
			})}
		</>
	);
};

export default TracksListAlbum;
