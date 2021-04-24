import React from 'react';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTv from '@material-ui/icons/LiveTv';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import Search from '@material-ui/icons/Search';
import PersonOutline from '@material-ui/icons/PersonOutline';

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="header__icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <LiveTv />
          <p>Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibrary />
          <p>Collections</p>
        </div>
        <div className="header__icon">
          <Search />
          <p>Search</p>
        </div>
        <div className="header__icon">
          <PersonOutline />
          <p>Account</p>
        </div>
      </div>
      <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="Hulu Icon" />
    </div>
  );
}

export default Header;
