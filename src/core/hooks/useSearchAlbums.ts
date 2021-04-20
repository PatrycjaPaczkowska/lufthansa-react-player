import axios from "axios";
import { useState } from "react";
import { AlbumsSearchResponse, AlbumView } from "../../model/Search";
import { auth } from "../services";

export const useSearchAlbums = (api_url: string, typeOfSearch: string) => {
	const [results, setResults] = useState<AlbumView[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState("");

   const cleanResults = () => setResults([]);

	const searchAlbums = async (query: string) => {
		try {
			setResults([]);
			setMessage("");
			setIsLoading(true);

			const response = await axios.get<AlbumsSearchResponse>(api_url, {
				headers: { Authorization: "Bearer " + auth.token },
				params: { q: query, type: typeOfSearch },
			});
         
			if (typeOfSearch === "album") {
				setResults(response.data.albums.items);
			} else if(typeOfSearch === "artist"){
				setResults(response.data.artists.items);
         } else {
            console.log("Problem on search Albums")
         }
		} catch (error) {
			setMessage(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		searchAlbums,
      cleanResults,
		isLoading,
		message,
		results,
	};
};
