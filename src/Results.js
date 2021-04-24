import React, { useState, useEffect } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';
import FlipMove from 'react-flip-move';

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const request = await axios.get(selectedOption.link);
      setMovies(request.data.results);
      return request;
    }
    getData();
  }, [selectedOption]);
  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
