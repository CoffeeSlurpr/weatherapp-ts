import axios from "axios";
import Forecast from "./Forecast";
import Weather from "./Weather";

const baseUrl = "https://api.openweathermap.org/data/2.5";

export const fetchWeather = async (city: string): Promise<Weather | undefined> => {
	try {
		const response = await axios.get<Weather>(`${baseUrl}/weather`, {
			params: {
				q: city,
				appid: import.meta.env.VITE_API_KEY,
			},
		});

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const fetchForecast = async (city: string): Promise<Forecast | undefined> => {
	try {
		const response = await axios.get<Forecast>(`${baseUrl}/forecast`, {
			params: {
				q: city,
				appid: import.meta.env.VITE_API_KEY,
			},
		});

		return response.data;
	} catch (error) {
		console.log(error);
	}
};
