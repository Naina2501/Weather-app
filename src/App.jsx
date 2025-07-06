import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherResult from './WeatherResult';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';

const API_KEY = 'e22c47ccecc84ab49c593729250607';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setError('');
    setLoading(true);
    setWeatherData(null);

    try {
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=yes`
      );
      if (!res.ok) throw new Error('City not found or API error');
      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <Container className="my-5  " style={{width:"100vw",padding:"10px",backgroundColor:""}} >
      <div className='row ' style={{border:"1px solid black"}}>
        <div className='col-6' >
          <h2 className="text-center mb-4">🌤️ Weather App</h2>
          <WeatherForm onSearch={fetchWeather} />
          {loading && <div className="text-center mt-3"><Spinner animation="border" /></div>}
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
          {weatherData && <WeatherResult data={weatherData} />}
        </div>
        <div className='col-6' >
        <img src="https://static.vecteezy.com/system/resources/previews/024/657/877/original/meteorologist-illustration-with-weather-forecast-and-atmospheric-precipitation-map-in-flat-cartoon-hand-drawn-landing-page-templates-vector.jpg" className='w-100'></img>
        </div>

      </div>
    </Container>
    
    
  );
}

export default App;
