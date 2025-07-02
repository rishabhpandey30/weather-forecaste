import { convertToFahrenheit } from "../weatherUtil";
import { getWeatherTypeFromCode } from "../weatherUtil";
const dateFormatter = new Intl.DateTimeFormat("en-IN", {
    month: "short",
    day: "numeric",
    year: "2-digit",
});
const formateDate = (date) => dateFormatter.format(date);

const WeatherRow = ({weather:{date, maxTempreture, minTempreture, weatherCode}, isCelsius}) =>{
    return(
        <tr>
            <td>{formateDate(date)}</td>
            <td>H: {isCelsius ? `${maxTempreture} °C` : `${convertToFahrenheit(maxTempreture)} °F`}{" "}
                 - L: {isCelsius ? `${minTempreture} °C` : `${convertToFahrenheit(minTempreture)} °F`}</td>
            <td>{getWeatherTypeFromCode(weatherCode)}</td>
        </tr>
    );
}
export default WeatherRow;