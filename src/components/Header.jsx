import React, { useState } from 'react';
import { useAlert } from 'react-alert';
// import {Link} from 'react-router-dom';

function Header () {
  const alert = useAlert();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (setIsClicked === true) return;
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };
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
        <button className='letter-space amatic-sc button-revert' disabled={isClicked} onClick={() => {
          handleClick()
          alert.show('近日公開予定😢')
          }}>profile</button>
        <div>
          <div className='amatic-sc name'>shuta</div>
          <div className='amatic-sc name'>kamei</div>
        </div>
        {/* <Link className='letter-space amatic-sc' to="portfolio">portfolio</Link> */}
        <button className='letter-space amatic-sc button-revert' disabled={isClicked} onClick={() => {
          handleClick()
          alert.show('まだ見れないよ🥲')
          }}>portfolio</button>
      </div>
    </React.Fragment>
  )
}

export default Header;