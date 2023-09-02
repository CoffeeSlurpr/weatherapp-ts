import { useRef } from "react";

type SearchProps = {
	setQuery: (query: string | undefined) => void;
};

function Search({ setQuery }: SearchProps) {
	const inputRef = useRef<string>();

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
				value={inputRef.current}
			/>
		</form>
	);
}

export default Search;
