import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { weatherState } from '../../atom/atom';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';
import { positionOptions } from '../../utils/positionOptions';
import { getWeatherData } from '../../api/api';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import * as S from './WeatherStyle';

export default function Weather() {
  const { location, error } = useCurrentLocation(positionOptions);
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [weather, setWeather] = useRecoilState(weatherState);

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
            location?.latitude,
            location?.longitude,
          );

          // 불러온 날씨 데이터로 city, weather, temp 설정
          if (
            weatherData &&
            weatherData.main &&
            weatherData.weather &&
            weatherData.weather[0]
          ) {
            setCity(weatherData.name);
            setTemp(`${weatherData.main.temp}°C`);
            setWeather({
              icon: weatherData.weather[0].icon,
              weather: weatherData.weather[0].main,
            });
          }
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }
    };

    fetchWeather();
  }, [location, error]);

  return (
    <S.WeatherContainer>
      {!weather === false ? (
        <S.WeatherTracker>
          <S.City>
            <p>{city}</p>
            <p>{weather.weather}</p>
          </S.City>
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
            alt="날씨 이미지"
          />
          <p>{temp}</p>
        </S.WeatherTracker>
      ) : (
        <LoadingSpinner error={error} />
      )}
    </S.WeatherContainer>
  );
}
