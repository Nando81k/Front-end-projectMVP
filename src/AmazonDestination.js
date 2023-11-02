// AmazonDestination.js
import React from 'react';
import { amazonData } from './AmazonData';
import './AmazonDestination.css';

const AmazonDestination = () => {
  return (
    <div>
      <h1>{amazonData.name}</h1>
      <p>Location: {amazonData.location}</p>
      <p>{amazonData.description}</p>
      <h2>Highlights:</h2>
      <ul>
        {amazonData.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
      <p>Cost per person: ${amazonData.costPerPerson}</p>
    </div>
  );
};

export default AmazonDestination;

