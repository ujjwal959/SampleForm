'use client';

import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';

const Form = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(null);
  const [nationality, setNationality] = useState(null);
  const [age, setAge] = useState(null);

  const apiUrlGender = `https://api.genderize.io?name=${name}`;
  const apiUrlNationality = `https://api.nationalize.io?name=${name}`;
  const apiUrlAge = `https://api.agify.io?name=${name}`;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make API requests when the form is submitted
    fetch(apiUrlGender)
      .then((response) => response.json())
      .then((data) => {
        setGender(data);
      })
      .catch((error) => {
        console.error('Error fetching gender:', error);
      });

    fetch(apiUrlNationality)
      .then((response) => response.json())
      .then((data) => {
        setNationality(data);
      })
      .catch((error) => {
        console.error('Error fetching nationality:', error);
      });

    fetch(apiUrlAge)
      .then((response) => response.json())
      .then((data) => {
        setAge(data);
      })
      .catch((error) => {
        console.error('Error fetching age:', error);
      });
  };

  function getMostProbableCountry(countryData) {
    let mostProbable = null;
    let highestProbability = 0;

    countryData.forEach((country) => {
      if (country.probability > highestProbability) {
        highestProbability = country.probability;
        mostProbable = country.country_id;
      }
    });

    return mostProbable;
  }


  console.log(nationality);

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <div id='name-container' style={{ marginBottom: '5px', marginTop: '20px' }}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div id='submit-btn-container' style={{ marginBottom: '10px' }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>

      {gender && nationality && age && (
        <div style={{ paddingBottom: '10px' }}>
          <div style={{ backgroundColor: '#f0f5f5', padding: '5px', borderRadius: '4px', marginBottom: '5px' }}>
            <p>Name: {name}</p>
          </div>
          <div style={{ backgroundColor: '#f0f5f5', padding: '5px', borderRadius: '4px', marginBottom: '5px' }}>
            <p>Gender: {gender.gender}</p>
          </div>
          <div style={{ backgroundColor: '#f0f5f5', padding: '5px', borderRadius: '4px', marginBottom: '5px' }}>
            <p>Age: {age.age}</p>
          </div>
          <div style={{ backgroundColor: '#f0f5f5', padding: '5px', borderRadius: '4px', marginBottom: '5px' }}>
            <p>Nationality: {getMostProbableCountry(nationality.country)}</p>
          </div>
        </div>
      )}
    </Container>
  );


};

export default Form;
