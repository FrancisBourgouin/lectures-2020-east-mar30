import React from 'react';
import './App.css';
import CurrentDay from './components/CurrentDay';
import CurrentWeather from './components/CurrentWeather';
import Location from './components/Location'
import Axios from 'axios'
import { useState } from 'react';

// API OWM : 09fd719b4b698ec0260e424f83378e3d
// "https://api.openweathermap.org/data/2.5/weather?q=Montreal&units=metric&appid=09fd719b4b698ec0260e424f83378e3d"

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState({})

  const updateWeather = location => {
    Axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=09fd719b4b698ec0260e424f83378e3d`)
      .then(res => setCurrentWeatherData(res.data))
  }
  return (
    <div className="App">
      <CurrentDay />
      <Location updateWeather={updateWeather} />
      {
        currentWeatherData.main ?
          <CurrentWeather currentWeatherData={currentWeatherData} />
          :
          <h3>Please type in a city!</h3>
      }
    </div>
  );
}

export default App;
