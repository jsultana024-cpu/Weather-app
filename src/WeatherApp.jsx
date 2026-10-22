import { useState } from 'react';
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        humidity: 47,
        temp: 25.05,
        tempMax: 25.05,
        tempMin: 25.05,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div className="WeatherApp" style={{ textAlign: "center" }}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}