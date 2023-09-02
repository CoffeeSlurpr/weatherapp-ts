import { useRef } from "react";

type SearchProps = {
	setQuery: (query: string | null) => void;
};

function Search({ setQuery }: SearchProps) {
	const inputRef = useRef<string | null>(null);

	const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		setQuery(inputRef.current);
	};

	return (
		<form onSubmit={handleSearch}>
			<input
				className="text-black"
				type="text"
				placeholder="Type a city..."
				onChange={(e) => {
					inputRef.current = e.target.value;
				}}
			/>
		</form>
	);
}

export default Search;
