import React from "react";

// npm i bootstrap
import "bootstrap/dist/css/bootstrap.css";
import { MusicSearchView } from "./music-search/containers/MusicSearchView";

function App() {
	return (
		<div>
			{/* .container>.row>.col */}
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="m-5" style={{textAlign: 'center'}}>Enjoy the Music!</h1>

						<MusicSearchView />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
