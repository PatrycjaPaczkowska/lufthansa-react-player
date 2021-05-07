import React, { useState } from "react";
import { Playlist } from "../../model/Playlist";

interface Props {
	playlists: Playlist[];
	selectedId?: string;
	onSelected(id: string): void;
	onRemove(id: Playlist["id"]): void;
}

export const PlaylistList = ({ playlists, selectedId, onSelected, onRemove }: Props) => {
	return (
		<div>
			{!playlists.length && <p>No playlists</p>}
			<ul>
				{playlists.map((pl) => (
					<li
						className={
							"list-group-item list-group-item-action " + (pl.id === selectedId ? " active" : "")
						}
						role="tab"
						key={pl.id}
						onClick={() => onSelected(pl.id)}
						aria-selected={pl.id === selectedId}
					>
						{pl.name}
						<button
							className="btn btn-light close"
							aria-label="remove"
							onClick={() => onRemove(pl.id)}
						>
							x
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};