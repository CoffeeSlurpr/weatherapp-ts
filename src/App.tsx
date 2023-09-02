import { useEffect, useState } from "react";
import Search from "./components/Search";
import Weather from "../api/Weather";
import Forecast from "../api/Forecast";
import { fetchWeather, fetchForecast } from "../api/api";

function App() {
	const [query, setQuery] = useState<string | null>(null);

	const [weather, setWeather] = useState<Weather | null>(null);
	const [weatherError, setWeatherError] = useState<string>();
	const [isWeatherLoading, setIsWeatherLoading] = useState<boolean>(false);

	const [forecast, setForecast] = useState<Forecast | null>(null);
	const [forecastError, setForecastError] = useState<string>();
	const [isForecastLoading, setIsForecastLoading] = useState<boolean>(false);

	useEffect(() => {
		if (query !== "" && query !== null) {
			setIsWeatherLoading(true);
			setIsForecastLoading(true);

			fetchWeather(query)
				.then((data) => {
					if (data) setWeather(data);
					setIsWeatherLoading(false);
				})
				.catch((error) => {
					setWeatherError(error);
					setIsWeatherLoading(false);
				});

			fetchForecast(query)
				.then((data) => {
					if (data) setForecast(data);
					setIsWeatherLoading(false);
				})
				.catch((error) => {
					setForecastError(error);
					setIsWeatherLoading(false);
				});
		}
	}, [query]);

	return (
		<div className="flex justify-center items-center w-full h-screen">
			<Search setQuery={setQuery} />
			<div>
				{weather?.main.temp}
			</div>
		</div>
	);
}

export default App;
