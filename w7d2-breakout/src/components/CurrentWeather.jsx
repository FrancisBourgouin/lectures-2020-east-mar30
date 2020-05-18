import React from 'react';

// res.data.main.temp
// res.data.main.feels_like
// res.data.weather[0].description

const CurrentWeather = props => {
  const { currentWeatherData } = props
  const temp = currentWeatherData.main && currentWeatherData.main.temp
  const feels_like = currentWeatherData.main && currentWeatherData.main.feels_like
  const description = currentWeatherData.weather && currentWeatherData.weather[0].description

  return (
    <section>
      <h1>Current Weather</h1>
      <h2>Currently the weather is:</h2>
      <ul>
        <li>{temp} Celsius</li>
        <li>{feels_like} Celsius-ish (doesnt deserve a unit)</li>
        <li>{description}</li>
      </ul>
    </section>
  )
}

export default CurrentWeather