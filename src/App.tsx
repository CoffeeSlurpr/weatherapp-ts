import { useState } from "react";
import Search from "./components/Search";

function App() {
	const [query, setQuery] = useState<string | undefined>("");

	return (
		<div className="flex justify-center items-center w-full h-screen">
			<Search setQuery={setQuery} />
		</div>
	);
}

export default App;
