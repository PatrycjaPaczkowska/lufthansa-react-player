import React from "react";
import { AlbumView } from "../../model/Search";

interface Props {
	item: AlbumView;
}

export const AlbumCard = ({ item }: Props) => {
   console.log(item)
	return (
		<div className="card h-100">
			<img
				src={item.images[0]?.url ?? 'http://placekitten.com/640/640'}
				className="card-img-top"
				alt={item.name}
			/>

			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
			</div>
		</div>
	);
};
