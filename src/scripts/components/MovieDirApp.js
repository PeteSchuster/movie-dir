'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var MovieBrowse = require('./MovieBrowse');

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var imageURL = require('../../images/yeoman.png');

var MovieDirApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <MovieBrowse />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = MovieDirApp;
