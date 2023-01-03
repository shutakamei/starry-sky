import React from 'react';
import '../css/App.css';
import '../css/universe.css';
import Header from './Header';
import StarrySky from './starry-sky';
import Wave from 'react-wavify';

function Universe() {
  return (
    <React.Fragment>
      <Header />
      <div className="universe">
        <StarrySky />
        <div className="horizon" />
        <Wave
        className='sea'
        paused={false}
        fill='rgb(3, 30, 53)'
        options={{
          height: 5,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
        />
        <div className="beach" />
        {/* <img className='github-logo' src='./images/github-mark-white.svg' /> */}
      </div>
    </React.Fragment>
  );
}

export default Universe;
