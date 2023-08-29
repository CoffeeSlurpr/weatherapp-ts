interface ForecastMain {
	temp: number;
	feels_like: number;
	temp_min?: number;
	temp_max?: number;
	pressure: number;
	sea_level?: number;
	grnd_level?: number;
	humidity: number;
	temp_kf?: number;
}

interface ForecastWeatherCondition {
	id: number;
	main: string;
	description: string;
	icon: string;
}

interface ForecastClouds {
	all: number;
}

interface ForecastWind {
	speed: number;
	deg: number;
	gust?: number;
}

interface ForecastRain {
	"1h": number;
}

interface ForecastSnow {
	"1h": number;
}

interface ForecastSys {
	pod: "n" | "d";
}

interface ForecastListItem {
	dt: number;
	main: ForecastMain;
	weather: ForecastWeatherCondition[];
	clouds: ForecastClouds;
	wind: ForecastWind;
	rain?: ForecastRain;
	snow?: ForecastSnow;
	visibility: number;
	pop: number;
	sys: ForecastSys;
	dt_txt: string;
}

interface ForecastCity {
	id: number;
	name: string;
	coord: {
		lat: number;
		lon: number;
	};
	country: string;
	timezone: number;
	sunrise: number;
	sunset: number;
}

interface Forecast {
	cod: string;
	message: number;
	cnt: number;
	list: ForecastListItem[];
	city: ForecastCity;
}

export default Forecast;
