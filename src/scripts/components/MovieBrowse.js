'use strict';

var React = require('react/addons');
var MovieList = require('./MovieList');
var MovieSearch = require('./MovieSearch');
var MovieFilter = require('./MovieFilter');

// require('styles/MovieBrowse.scss');

var MovieBrowse = React.createClass({
  getInitialState: function() {
    return {
        data: [
            {"title": "Pulp Fiction", "imgSrc": "pulp-fiction.jpg", "text": "Bad Add Mother Fucker"},
            {"title": "Cool Hand Luke", "imgSrc": "cool-hand-luke.jpg", "text": "Get Yourself a Sweet Madonna"}
        ]
    };
  },
  render: function () {
    return (
        <div className="movie-browse">
            <h1>Movie Browse</h1>
            <MovieList data={this.state.data} />
            <MovieSearch />
            <MovieFilter />
        </div>
      );
  }
});

module.exports = MovieBrowse;
