import { useState, useEffect } from 'react';

export const useCurrentLocation = (options = {}) => {
    const [location, setLocation] = useState();
    const [error, setError] = useState();

    // 위치를 가져오는 것에 성공하면 좌표 저장
    const handleSuccess = (location) => {
        const { latitude, longitude } = location.coords;
        setLocation({ latitude: parseFloat(latitude.toFixed(2)), longitude: parseFloat(longitude.toFixed(2)) });
    };

    const handleError = () => {
        setError('Local navigation failed.');
    };

    useEffect(() => {
        // geolocation을 실행하는 것 자체를 실패할 경우
        if (!navigator.geolocation) {
            setError('Geolocation is not supported.');
            return;
        }

        // geolocaition 을 한 번 실행, option값이 바뀔 경우 재실행.
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);
    }, [options]);

    console.log(location);
    return { location, error };
};
