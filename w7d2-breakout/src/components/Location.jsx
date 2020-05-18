import React from 'react';
import { useState } from 'react';



const Location = (props) => {
  const [location, setLocation] = useState("")
  const updateWeather = props.updateWeather

  const handleSubmit = event => {
    event.preventDefault()
    updateWeather(location)
  }

  return (
    <section>
      <h1>Location</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={location}
          onChange={event => setLocation(event.target.value)}
        />
        <input type="submit" value="Fetch weather!" />
      </form>
    </section>
  )
}

export default Location