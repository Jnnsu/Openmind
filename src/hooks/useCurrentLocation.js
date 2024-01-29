import { useState, useEffect } from 'react';

export const useCurrentLocation = (options = {}) => {
  // 파라미터에 옵션을 따로 넣을 수 있도록 구성
  const [location, setLocation] = useState();
  const [error, setError] = useState();

  // 위치를 가져오는 것에 성공하면 좌표 저장
  const handleSuccess = location => {
    const { latitude, longitude } = location.coords;
    console.log(location.coords);
    setLocation({ latitude, longitude });
  };

  // 실패시 에러 메세지 지정
  const handleError = () => {
    setError('Local navigation failed.');
  };

  // geolocation을 실행하는 것 자체를 실패할 경우 에러 메세지 지정
  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported.');
      return;
    }

    // geolocaition 을 한 번 실행, option값이 바뀔 경우 재실행.
    navigator.geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      options,
    );
  }, [options]);

  return { location, error };
};
