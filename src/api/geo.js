import axios from "axios";


const API_KEY ='8f1c59595f8c099ec73eb709cd5a09a8'


export const fetchCoordinates = async(city)=>{
    const res= await axios.get(`https://api.openweathermap.org/geo/1.0/direct`,{
        params:{
            q:city,
            limit:1,//최대결과수
            appid:API_KEY
        }
    })

    if(res.data.length===0){
        throw new Error('도시를 찾을 수 없습니다.')
    }

    const {lat, lon, name, country}=res.data[0]//구조분해할당

    return {lat, lon, name, country}
}