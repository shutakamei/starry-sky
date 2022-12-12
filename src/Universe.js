import logo from './logo.svg';
import React, { useState } from 'react';
import './css/App.css';
import './css/universe.css'

function Universe() {
  const [stars, setStars] = useState({
    starCount: Math.floor(Math.random() * 200),
  });
  
  const starArray = [...Array(stars.starCount)].map(() => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight * 0.45,
  }));
  
  console.log(starArray)
  return (
    <div className="universe">
      <div className="sky">
        {starArray.map(({ x, y }) => (
          <div
            key={`star-${x}-${y}`}
            className="star"
            style={{
              left: x,
              top: y,
            }}
          >
          .
          </div>
        ))}
      </div>
      <div className="sea"></div>
    </div>
  );
}

export default Universe;
