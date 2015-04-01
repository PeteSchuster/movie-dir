'use strict';

var React = require('react/addons');

// require('styles/MovieSummary.scss');

var MovieSummary = React.createClass({
  render: function () {
    return (
        <article className="movie">
            <div className="movie__image">
                <img src="images/{this.props.imgSrc}" />
            </div>
            <div className="movie__info">
                <h1>{this.props.title}</h1>
                {this.props.text}
            </div>
        </article>
      );
  }
});

module.exports = MovieSummary;
