import { useEffect, useState } from "react";

export default function WeatherCard(){
    const api = "11cf9cef62ad418bad424730242502";
    const Loaction = "Kegalle";
    const [isUpdated,setIsUpdated] = useState(true);
    const [weather,setWeather] = useState({});
    useEffect(()=>{
        fetch("http://api.weatherapi.com/v1/forecast.json?key=11cf9cef62ad418bad424730242502&q=Kegalle&days=3&aqi=no&alerts=no")
    .then(Response => Response.json())
    .then(data =>{
        console.log(data);
        setWeather(data)
    })
    },[])
    

    return (
        <div className="container">
            <div className="container-fluid bg-secondary rounded-3 p-4">
                <div>
                    <h5>{Loaction}</h5>
                </div>
                <div className="d-flex align-items-center">
                    <h5 className="display-1">{weather.current.temp_c}℃</h5>
                    <div className="ms-3"><img src={weather.current.condition.icon} alt="" /></div>
                </div>
                <div>
                    <p className="display-6">feels like: {weather.current.feelslike_c}</p>
                </div>
                
            </div>
        </div>
    )
}