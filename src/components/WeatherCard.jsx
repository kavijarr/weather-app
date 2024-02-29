import React, { useEffect, useState } from 'react';
import './WeatherCard.css';

export default function WeatherCard() {
  const [isUpdated, setIsUpdated] = useState(true);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch("http://api.weatherapi.com/v1/forecast.json?key=11cf9cef62ad418bad424730242502&q=Kegalle&days=3&aqi=no&alerts=no")
      .then((response) => response.json())
      .then((data) =>{setWeather(data); console.log(data);})
      .catch((error) => console.error(error));
  }, []);

  return (
      <div className="container-fluid bg-secondary rounded-3 p-4">
        {weather.current ? (
          <>
            <h5>Location: {weather.location.name}</h5>
            <div className="d-flex align-items-center">
              <h5 className="display-1">{weather.current.temp_c}℃</h5>
              <div className="ms-3"><img src={weather.current.condition.icon} alt="" /></div>
            </div>
            <div>
              <p className="display-6">feels like: {weather.current.feelslike_c}</p>
            </div>
            <div className="row">
              <div className='col rounded border-2 border border-dark me-2'>
                {weather.forecast.forecastday[0].date}
                <img className='ms-4' src={weather.forecast.forecastday[0].day.condition.icon} alt="" />
                </div>
              <div className='col rounded border-2 border border-dark me-2'>
              {weather.forecast.forecastday[1].date}
                <img className='ms-4' src={weather.forecast.forecastday[1].day.condition.icon} alt="" />
              </div>
              <div className='col rounded border-2 border border-dark'>
              {weather.forecast.forecastday[2].date}
                <img className='ms-4' src={weather.forecast.forecastday[2].day.condition.icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
  );
}
