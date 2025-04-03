import './App.css'
import WeatherCard from './components/WeatherCard'
import { useState } from 'react'
import { fetchWeatherByCoords } from './api/weather'
import { fetchCoordinates } from './api/geo'

function App() {

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)

  // const lat = 37.5665; // 서울 위도
  // const lon = 126.9780; // 서울 경도

  // fetchWeatherByCoords(lat, lon).then(data => {
  //     console.log(data);
  // });


  // fetchCoordinates('seoul').then(coords=>{
  //   console.log(coords)
  // })

  const onChangeInput = (e) => {
    setCity(e.target.value)
  }

  const onKeyupEnter = (e) => {
    if (e.keyCode === 13) {
      handleSearch()
    }
  }

  const handleSearch = async () => {
    if (!city) return

    try {
      const coordsList = await fetchCoordinates(city)
      console.log('📍 응답:', coordsList)

      if (!coordsList || coordsList.length === 0) {
        alert('도시를 찾을 수 없어요')
        return
      }

      const { lat, lon, name, country } = coordsList[0]
      console.log(`${name}, ${country} →`, lat, lon)

      const data = await fetchWeatherByCoords(lat, lon)
      console.log('🌤️ 날씨 데이터:', data)

      setWeather(data)
    } catch (err) {
      console.error('❌ 에러:', err)
      alert('도시를 찾을 수 없습니다.')
    } finally {
      setCity('')
    }
  }




  return (
    <div className='app'>
      <h1>🌤️ 날씨앱</h1>

      <div className="input-wrap">

        <input
          type="text"
          placeholder="도시명을 입력하세요"
          value={city}
          onKeyUp={onKeyupEnter}
          onChange={onChangeInput}
        />
        <button onClick={handleSearch}>검색</button>
      </div>

      <WeatherCard weather={weather} />

    </div>
  )
}

export default App
