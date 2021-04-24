import React from 'react';
import './Nav.css';
import requests from './request.js';

function Nav({ selectedOption, setSelectedOption }) {
  return (
    <div className="nav">
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchTrending);
        }}
        className={selectedOption.name === 'trending' ? 'nav-active' : ''}
      >
        Trending
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchTopRated);
        }}
        className={selectedOption.name === 'topRated' ? 'nav-active' : ''}
      >
        Top Rated
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchActionMovies);
        }}
        className={selectedOption.name === 'action' ? 'nav-active' : ''}
      >
        Action
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchComedyMovies);
        }}
        className={selectedOption.name === 'comedy' ? 'nav-active' : ''}
      >
        Comedy
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchHorrorMovies);
        }}
        className={selectedOption.name === 'horror' ? 'nav-active' : ''}
      >
        Horror
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchRomanceMovies);
        }}
        className={selectedOption.name === 'romance' ? 'nav-active' : ''}
      >
        Romance
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchMysteryMovies);
        }}
        className={selectedOption.name === 'mystery' ? 'nav-active' : ''}
      >
        Mystery
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchSciFiMovies);
        }}
        className={selectedOption.name === 'sciFi' ? 'nav-active' : ''}
      >
        Sci-Fi
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchWestern);
        }}
        className={selectedOption.name === 'western' ? 'nav-active' : ''}
      >
        Western
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchAnimation);
        }}
        className={selectedOption.name === 'animation' ? 'nav-active' : ''}
      >
        Animation
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(requests.fetchTV);
        }}
        className={selectedOption.name === 'tv' ? 'nav-active' : ''}
      >
        TV Movie
      </h2>
    </div>
  );
}

export default Nav;
