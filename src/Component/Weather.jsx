
import "./Weather.css"
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'
import { useEffect, useState } from "react";


let Weather =()=>{
    let[weatherData, setWeatherData]= useState("");
    let[inputDta, setInputData]= useState("");
    let userData=(event)=>{
        setInputData(event.target.value);
    }
    let btn= ()=>{
        // useEffect(()=>{
        //     search(inputDta);
        //     },[]);
        search(inputDta);

    }

    let allIcon={
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon,
    }
    


    let api= "8a30047e128dbe539d55e1673fc168a1";
    let search= async (city)=>{
        try {
            
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`;
            let respones= await fetch(url);
            let data= await respones.json();
            let icon= allIcon[data.weather[0].icon] || clear_icon;

            setWeatherData({
                tempData: Math.floor(data.main.temp),
                humidityData: data.main.humidity,
                windData: data.wind.speed,
                cityName: data.name,
                icon: icon

            })  
            
            
            
            
            
        } catch (error) {
           console.log(error);
            
        }
    };

    

    return(
        <div className="weather">

            <div className="search-bar">
                <input type="text" placeholder="Enter City Name" onChange={userData}/>
                <img src={search_icon} alt="" onClick={btn}/>
            </div>
            
            <img src={weatherData.icon} alt="" className="weather-icon"/>
            <p className="temprature">{weatherData.tempData}°C</p>
            <p className="location">{weatherData.cityName}</p>

            <div className="weather-data">
                <div className="col">
                    <img src={humidity_icon} alt="" />
                    <div>
                        <p>{weatherData.humidityData} %</p>
                        <span>Humidity</span>
                    </div>
                </div>

                <div className="col">
                    <img src={wind_icon} alt="" />
                    <div>
                        <p>{weatherData.windData} Km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Weather