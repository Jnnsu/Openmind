import { useEffect } from 'react';
import * as S from './WeatherStyle';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';
import { positionOptions } from '../../utils/positionOptions';
import { useRecoilState } from 'recoil';
import { weatherState, cityState, tempState } from '../../atoms/weatherAtom';
import { getWeatherData } from '../../api/api';

export default function Weather() {
  const { location, error } = useCurrentLocation(positionOptions);
  const [weather, setWeather] = useRecoilState(weatherState);
  const [city, setCity] = useRecoilState(cityState);
  const [temp, setTemp] = useRecoilState(tempState);

  useEffect(() => {
    const fetchWeather = async () => {
      if (error) {
        return console.log('Geolocation error:', error);
      }
      // geolocation에서 error를 받아왔을 경우 error 출력
      // 사용자 위치 값을 받아왔을 경우 아래의 날씨 data 받아오기 실행
      if (location) {
        try {
          // 날씨 데이터 불러오기
          const weatherData = await getWeatherData(
            location.latitude,
            location.longitude,
            process.env.REACT_APP_WEATHER_API_KEY,
          );

          console.log(weatherData);

          // 불러온 날씨 데이터로 city, weather, temp 설정
          if (weatherData && weatherData.data) {
            setCity(weatherData.data.name);
            setTemp(`${weatherData.data.main.temp}°C`);
            setWeather(weatherData.data.weather[0].icon); // 그냥 weather를 요청하면 날씨를 글자로 보내주고 icon을 붙이면 날씨에 맞는 이미지 url을 보내준다.
          } else {
            console.error('Invalid weather data:', weatherData);
          }
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }
    };

    fetchWeather();
  }, [location, error, setWeather, setCity, setTemp]);

  return (
    <div>
      {!city === false ? (
        <S.WeatherDiv>
          <img
            src={`http://openweathermap.org/img/wn/${weather}.png`}
            alt="날씨 이미지"
          ></img>
          <span>{temp}</span>
          <p>{city}</p>
        </S.WeatherDiv>
      ) : (
        <S.CostumSpin tip={'Finding your location..'} />
      )}
    </div>
  );
}
