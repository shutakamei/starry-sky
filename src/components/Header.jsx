import React from 'react';
import {Link} from 'react-router-dom';

function Header () {
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
        <Link className='letter-space' to="profile">profile</Link>
        <div>
          <p className='myname'>shuta</p>
          <p className='myname'>kamei</p>
        </div>
        <Link className='letter-space' to="portfolio">portfolio</Link>
      </div>
    </React.Fragment>
  )
}

export default Header;