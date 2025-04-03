import axios from "axios";

const API_KEY='8f1c59595f8c099ec73eb709cd5a09a8'


export const fetchWeatherByCoords=async(lat, lon)=>{

    const res= await axios.get(`https://api.openweathermap.org/data/2.5/weather`,{
        params:{
            lat,//위도
            lon,//경도
            units:'metric',//섭씨 단위 날씨 정보 받기
            lang:'kr',//한국어로 된 날씨 설명
            appid:API_KEY
        }
    })

    

    return res.data

}
