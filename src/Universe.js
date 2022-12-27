
import React from 'react';
import './css/App.css';
import './css/universe.css'
import StarrySky from './starry-sky'

function Universe() {
  return (
    <div className="universe">
      <div className="sky">
        <StarrySky />
      </div>
      <div className="sea"></div>
    </div>
  );
}

export default Universe;
