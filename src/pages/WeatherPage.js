import WeatherRow from "../component/WeatherRow";
import WeatherSummary from "../component/WeatherSummary";

const WeatherPage = () => {
    const isDay = false; 
    return(
        <div className={isDay ? "app": "app dark"}>
            <h1 className="my-heading">Weather</h1>
            <button className="ui icon button" onClick={() => 
                {console.log('Temperature unit button was clicked');}}
                style={{float:"right" }}>
                °F
            </button>
            <div>
                <WeatherSummary />
                <table className={`ui very basic table dark ${!isDay && "dark"}`}>
                    <thead className={`table-custom ${!isDay && "dark"}`}>
                    <tr>
                        <th>Date</th>
                        <th>Temperature</th>
                        <th>Type</th>
                    </tr>
                    </thead>
                    <tbody className="table-custom">
                        <WeatherRow />
                        <WeatherRow />
                        <WeatherRow />
                        <WeatherRow />
                        <WeatherRow />
                        <WeatherRow />
                        <WeatherRow />  
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default WeatherPage;