import React from 'react';
import { useAlert } from 'react-alert';
// import {Link} from 'react-router-dom';

function Header () {
  const alert = useAlert();
  return(
    <React.Fragment>
      <header className="App-header">
        <ul className="head_banner">
          <li>
            <a href="https://www.instagram.com/chiikawa__/">
              Instagram
            </a>  
          </li>
        </ul>
      </header>
      <div className='info-wrapper'>
        {/* <Link className='letter-space amatic-sc' to="profile">profile</Link> */}
        <button className='letter-space amatic-sc button-revert' onClick={() => alert.show('近日公開予定😢')}>profile</button>
        <div>
          <div className='amatic-sc name'>shuta</div>
          <div className='amatic-sc name'>kamei</div>
        </div>
        {/* <Link className='letter-space amatic-sc' to="portfolio">portfolio</Link> */}
        <button className='letter-space amatic-sc button-revert' onClick={() => alert.show('まだ飛べないよ😢')}>portfolio</button>
      </div>
    </React.Fragment>
  )
}

export default Header;