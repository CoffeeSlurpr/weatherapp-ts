# Weather App

This app uses publicly available data via [OpenWeather](https://openweathermap.org).

## Feature List

- **Current weather**: Get real-time information about the current weather conditions, including temperature, humidity, wind speed, and more.
- **Weather forecast**: View short-term and extended weather forecasts for the upcoming days.
- **Location-based**: Opt-in to using the device's location to automatically provide weather information for your current location.
- **Search for location with suggestions**: You can also search for weather in other locations with suggestions as you type.
- **Toggle between imperial and metric measurement**: Set your preferred units for temperature and other data.
- **Background art/pattern based on current weather**: The app's background adapts to the current weather conditions, enhancing the visual experience.
- **Responsive design**: The app is designed to work seamlessly on various devices and screen sizes.

## Tech Stack

- React + Typescript + Vite
- Tanstack Query
- SCSS

## Installation

**1. Clone Repository**

```bash
git clone https://github.com/CoffeeSlurpr/weatherapp-ts.git
```

**2. Install dependencies**

```bash
cd weatherapp-ts
yarn
```

**3. Rename the .env.example file to .env and add your API key**

copy example file

```bash
cp .env.example .env
```

**4. Run app**

```bash
yarn dev
```

**5. Access app**

Access the app at:

```
http://localhost:5173/
```
