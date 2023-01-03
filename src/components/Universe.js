import React from 'react';
import '../css/App.css';
import '../css/universe.css';
import Header from './Header';
import StarrySky from './StarrySky';
import Wave from 'react-wavify';
import githubLogo from '../images/github-mark-white.svg'

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
        <div className="beach">
        <a className='github' href='https://github.com/shutakamei' target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="github-logo" />
        </a>
      </div>      </div>
    </React.Fragment>
  );
}

export default Universe;
