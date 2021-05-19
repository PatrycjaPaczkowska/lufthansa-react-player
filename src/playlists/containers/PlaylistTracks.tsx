// tsrcc
import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { SearchForm } from "../../core/components/SearchForm";
import { playlistsAdd } from "../../core/reducers/PlaylistsReducer";
import { selectPlaylists, tracksUpdate } from "../../core/reducers/TracksReducer";
import { Playlist } from "../../model/Playlist";
import { SimpleTrack, Track } from "../../model/Search";
import SelectPlaylist from "../components/SelectPlaylist";
import TrackDetails from "../components/TrackDetails";
import TrackForm from "../components/TrackForm";
import TracksList from "../components/TracksList";

interface Props extends RouteComponentProps {}
interface State {
	selectedPlaylist?: Playlist;
	selectedTrack?: SimpleTrack;
}

export class MyBaseComponent<Props, State> extends React.Component<Props, State> {
	reusableBaseMethod() {}
}

export default class PlaylistTracks extends MyBaseComponent<Props, State> {
    dispatch = useDispatch()

	playlists = useSelector(selectPlaylists);

	selectTrack = (track: SimpleTrack) => {
	};

	selectPlaylist = (playlist_id: Playlist["id"]) => {
		// debugger
		console.log(this);
	};

	save = (draft: SimpleTrack) => {
      this.dispatch(tracksUpdate(draft));
	};

	formRef = React.createRef<TrackForm>();

	reset = () => {
		this.formRef.current?.resetForm();
	};

   listofTracks = this.playlists.items.map(i => i.tracks)

	render() {
		console.log("render", this.state.selectedPlaylist?.tracks![0].name);
		return (
			<div>
				PlaylistTracks
				<div className="row">
					<div className="col">
						{/* <SelectPlaylist playlists={this.state.playlists} onSelect={(id) => this.selectPlaylist(id)} /> */}
						<SearchForm onSearch={() => this.setState({})} query="" />
						<SelectPlaylist playlists={this.playlists.items} onSelect={this.selectPlaylist} />
						<hr />

						<TracksList tracks={this.playlists.items} selected={this.state.selectedTrack?.id} onSelect={this.selectTrack} />
					</div>
					<div className="col">
						{this.state.selectedTrack && <TrackDetails track={this.state.selectedTrack} />}

						{this.state.selectedTrack && (
							<>
								<TrackForm track={this.state.selectedTrack} onSave={this.save} ref={this.formRef} />
								<button className="btn btn-danger" onClick={this.reset}>
									Reset
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		);
	}
}
