import {useEffect, useState} from "react";

const API_KEY = "41078082e06b1a8bc28740bdc4768b6e";

const CurrentWeather = () => {


    const [city,setCity] = useState("");
    const [weather, setWeather] = useState("");

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(getWeatherSucces,getWeatherError);
    },[]);

    function getWeatherSucces(position){
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
        //TODO: axios로 변경
        fetch(url) 
        .then((response)=>response.json())
        .then((data) => {
            setCity(data.name);
            setWeather(`${data.weather[0].main} / ${data.main.temp}`)
        });
    }
    function getWeatherError() {
        alert("위치 정보를 허용을 확인해주세요.");
    }

    return (
    <div className="CurrentWeather">
        <h3>{city} / {weather}</h3>
    </div>);
}

export default CurrentWeather;