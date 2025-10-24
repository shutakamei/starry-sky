import type { FC } from 'react';
import '../styles/home.css';
import Header from '../components/layout/Header';
import StarrySky from '../components/common/StarrySky';
import Wave from 'react-wavify';

const GITHUB_LOGO = '/assets/images/github-mark-white.svg';

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <div className="universe">
        <StarrySky />
        <div className="horizon" />
        <Wave
          className="shallow-sea"
          paused={false}
          fill="rgb(141 180 212)"
          options={{
            height: 2.5,
            amplitude: 20,
            speed: 0.175,
            points: 5,
          }}
        />
        <Wave
          className="deep-sea"
          paused={false}
          fill="rgb(3, 3, 53)"
          options={{
            height: 7,
            amplitude: 20,
            speed: 0.15,
            points: 3,
          }}
        />
        <div className="beach">
          <a
            className="github"
            href="https://github.com/shutakamei"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="github-logo" src={GITHUB_LOGO} alt="github-logo" />
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
