import React, { useState } from "react";

interface Props {
	onSearch(query: string): void;
	mode: string;
}

export const SearchForm = ({ onSearch }: Props) => {
	const [query, setQuery] = useState("");

	const handleSearch = () => {
		setQuery("");
		onSearch(query);
	};

	return (
		<div>
            <h4 className="mt-4">Type something...</h4>

			<div className="input-group mt-4 mb-5">
				<input
					type="text"
					className="form-control"
					placeholder="Search"
					onChange={(e) => setQuery(e.target.value)}
					value={query}
					onKeyUp={(e) => e.code === "Enter" && handleSearch()}
				/>

				<button
					className="btn btn-outline-secondary"
					type="button"
					onClick={handleSearch}
				>
					Search
				</button>
			</div>
		</div>
	);
};
