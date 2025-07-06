import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

function WeatherForm({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
  };

  return (
   
     <Form onSubmit={handleSubmit}  style={{ width:"400px"}}>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
         
        />
        <Button variant="primary" type="submit" >Get Weather</Button>
      </InputGroup>
    </Form>
   
  );
}

export default WeatherForm;
