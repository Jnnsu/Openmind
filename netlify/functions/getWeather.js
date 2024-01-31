exports.handler = async (event, context) => {
  const lat = event.queryStringParameters.lat;
  const lon = event.queryStringParameters.lon;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const weatherData = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(weatherData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
