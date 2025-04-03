import React from 'react'

const WeatherCard = ({ weather }) => {

    if (!weather) return null

    console.log(weather)


  const { name, main, weather: weatherInfo } = weather
//weather: weatherInfo   이름 바꾸기 기능
  const { temp, humidity } = main//온도 습도
  const { description, icon } = weatherInfo[0]





    return (
        <div className='card'>
            <h2>{name}</h2>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-icon" />
            <p>{description}</p>
            <p>🌡️ {temp}℃</p>
            <p>💧 {humidity}%</p>
        </div>
    )
}

export default WeatherCard