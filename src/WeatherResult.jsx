import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function WeatherResult({ data }) {
  const { location, current } = data;

  return (
    <Card className="mt-4 shadow-sm" style={{border:"1px solid black", width:"400px", alignContent:"center"}}>
      <Card.Header>
        <h5>{location.name}, {location.country}</h5>
        <small>Local Time: {location.localtime}</small>
      </Card.Header>
      <Card.Body>
        <h4>
          {current.condition.text} 
          <img src={current.condition.icon} alt="icon" />
        </h4>
        <p><strong>Temperature:</strong> {current.temp_c}°C (Feels like {current.feelslike_c}°C)</p>
        <ListGroup variant="flush">
          <ListGroup.Item><strong>Humidity:</strong> {current.humidity}%</ListGroup.Item>
          <ListGroup.Item><strong>Wind:</strong> {current.wind_kph} kph</ListGroup.Item>
          <ListGroup.Item><strong>Air Quality Index (PM2.5):</strong> {current.air_quality.pm2_5?.toFixed(2)}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default WeatherResult;
