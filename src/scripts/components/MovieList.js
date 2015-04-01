'use strict';

var React = require('react/addons');
var MovieSummary = require('./MovieSummary');

// require('styles/MovieList.scss');

var MovieList = React.createClass({
  render: function () {
    var movieListItems = this.props.data.map(function(movie, index) {
      return (
        <MovieSummary title={movie.title} imgSrc={movie.imgSrc} key={index}>
            {movie.text}
        </MovieSummary>
      );
    });

    return (
        <div className="movie-list">
            {movieListItems}
        </div>
      );
  }
});

module.exports = MovieList;
