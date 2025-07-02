const wmoWeatherCodes = new Map();
wmoWeatherCodes.set(0, "Clear sky");
wmoWeatherCodes.set(1, "Mainly clear");
wmoWeatherCodes.set(2, "Partly cloudy");
wmoWeatherCodes.set(3, "Overcast");
wmoWeatherCodes.set(45, "Fog");
wmoWeatherCodes.set(48, "Depositing Rime fog");
wmoWeatherCodes.set(51, "Drizzle: Light ");
wmoWeatherCodes.set(53, "Drizzle: Moderate");
wmoWeatherCodes.set(55, "Drizzle: Dense ");
wmoWeatherCodes.set(56, "Freezing Drizzle: Light");
wmoWeatherCodes.set(57, "Freezing Drizzle: heavy");
wmoWeatherCodes.set(61, "Rain: Slight");
wmoWeatherCodes.set(63, "Rain: Moderate");
wmoWeatherCodes.set(65, "Rain: Heavy");
wmoWeatherCodes.set(66, "Freezing Rain: Light");
wmoWeatherCodes.set(67, "Freezing Rain: Heavy");
wmoWeatherCodes.set(71, "Snow Fall: Light");
wmoWeatherCodes.set(73, "Snow Fall: Moderate");
wmoWeatherCodes.set(75, "Snow Fall: Heavy");
wmoWeatherCodes.set(77, "Snow Grains");
wmoWeatherCodes.set(80, "Rain Showers: Light");
wmoWeatherCodes.set(81, "Rain Showers: Moderate");
wmoWeatherCodes.set(82, "Rain Showers: Heavy");
wmoWeatherCodes.set(85, "Snow Showers: Light");
wmoWeatherCodes.set(86, "Snow Showers: Heavy");
wmoWeatherCodes.set(95, "Thunderstorm");
wmoWeatherCodes.set(96, "Thunderstorm with hail");


const convertToFahrenheit = (celsiustemp) => ((celsiustemp * 9) / 5 + 32).toFixed(1);

const getWeatherTypeFromCode = (code) => wmoWeatherCodes.get(code);

export { convertToFahrenheit, getWeatherTypeFromCode };