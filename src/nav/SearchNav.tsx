export interface NavProps {
   typeOfSearch: string
   setTypeOfSearch: React.Dispatch<React.SetStateAction<"artist" | "album" | "playlist">>
   cleanResults: () => void
}
 
const Nav: React.SFC<NavProps> = ({typeOfSearch, setTypeOfSearch, cleanResults}) => {
   return ( 
      <ul className="nav nav-tabs" id="myTab" role="tablist">
						<li className="nav-item" role="presentation">
							<a
								className={
									typeOfSearch === "artist" ? "nav-link active" : "nav-link text-info"
								}
								id="artist"
								data-toggle="tab"
								href="#artist"
								role="tab"
								aria-controls="artist"
								aria-selected="true"
								onClick={() => {setTypeOfSearch("artist"); cleanResults();}}
							>
								Search the Artist
							</a>
						</li>
						<li className="nav-item" role="presentation">
							<a
								className={
									typeOfSearch === "album" ? "nav-link active" : "nav-link text-info"
								}
								id="album"
								data-toggle="tab"
								href="#album"
								role="tab"
								aria-controls="album"
								aria-selected="false"
								onClick={() => {setTypeOfSearch("album"); cleanResults();}}
							>
								Search the Albums
							</a>
						</li>
						<li className="nav-item" role="presentation">
							<a
								className={
									typeOfSearch === "playlist" ? "nav-link active" : "nav-link text-info"
								}
								id="playlist"
								data-toggle="tab"
								href="#playlist"
								role="tab"
								aria-controls="playlist"
								aria-selected="false"
								onClick={() => setTypeOfSearch("playlist")}
							>
								Show my Playlist
							</a>
						</li>
					</ul>
    );
}
 
export default Nav;