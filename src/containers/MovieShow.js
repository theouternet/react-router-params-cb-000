import React from 'react';
import { connect } from 'react-redux';


const MovieShow = ({ movie }) =>
  <div>
    <h3>Title: {movie.title}</h3>
  </div>;

export default MovieShow;