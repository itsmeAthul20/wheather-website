import React, { useState } from 'react';

function App() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);

  const apiKey = 'e610889c3f844c3b883100530240809'; // Your API key

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
    );
    const data = await response.json();
    setWeather(data);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {weather && (
        <div>
          <h2>{weather.location.name}</h2>
          <p>{weather.current.temp_c}°C</p>
          <p>{weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="weather" />
        </div>
      )}
    </div>
  );
}

export default App;
