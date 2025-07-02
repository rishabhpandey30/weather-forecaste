import {  useEffect ,useState } from "react"; 
import WeatherRow from "../component/WeatherRow";
import WeatherSummary from "../component/WeatherSummary";
import getWeather from "../api/weatherApi";

const fetchCoordinates = (callback) => {
    navigator.geolocation.getCurrentPosition( ({coords:{latitude, longitude}}) => {
        callback(latitude, longitude);
    }, (err) => console.error(err)
);
}

const WeatherPage = () => {
    const [todayWeather, setTodayWeather] = useState({});
    const [weekWeather, setWeekWeather] = useState([]);
    const [isCelsius, setIsCelsius] = useState(true);

    const isDay = todayWeather.isDay ?? true; 

    useEffect(() => {
        fetchCoordinates(async(latitude, longitude) => {
          const weatherInfo= await getWeather({latitude, longitude});
            convertToStateVariable(weatherInfo);
        });
    }, []);
    const convertToStateVariable = (tempWeekWeather)=>{
        let fetchWeatherInfo =[];
        for(let i=0; i<tempWeekWeather.daily.time.length; i++){
            fetchWeatherInfo.push({
                date: new Date(tempWeekWeather.daily.time[i]),
                maxTempreture: tempWeekWeather.daily.temperature_2m_max[i],
                minTempreture: tempWeekWeather.daily.temperature_2m_min[i],
                weatherCode: tempWeekWeather.daily.weathercode[i],
            })
    }
    setWeekWeather(fetchWeatherInfo);
    let currentWeather = tempWeekWeather.current_weather;
    currentWeather.time = new Date(currentWeather.time);
    currentWeather.isDay = currentWeather.is_day === 1 ? true : false;
    delete currentWeather.is_day;
    currentWeather.weatherCode= currentWeather.weathercode;
    delete currentWeather.weathercode;
    setTodayWeather(currentWeather);
};
if(!weekWeather.length){
    return <p>Loading...</p>
}
    return(
        <div className={isDay ? "app": "app dark"}>
            <h1 className="my-heading">Weather</h1>
            <button className="ui icon button" onClick={() => 
                {
                    setIsCelsius(!isCelsius);
                    ;}}
                style={{float:"right" }}>
                {isCelsius ? "°F" : "°C"}
            </button>
            <div>
                <WeatherSummary currentWeather={todayWeather} isCelsius={isCelsius} />
                <table className={`ui very basic table${!isDay ? " dark" : ""}`}>
                    <thead className={`table-custom${!isDay ? " dark" : ""}`}>
                    <tr>
                        <th>Date</th>
                        <th>Temperature</th>
                        <th>Type</th>
                    </tr>
                    </thead>
                    <tbody className="table-custom">
                       {weekWeather.map((weather)=>(
                        <WeatherRow weather={weather} isCelsius={isCelsius} key={weather.date} />
                         ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default WeatherPage;