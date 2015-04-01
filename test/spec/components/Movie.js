'use strict';

describe('Movie', function () {
  var React = require('react/addons');
  var Movie, component;

  beforeEach(function () {
    Movie = require('components/Movie.js');
    component = React.createElement(Movie);
  });

  it('should create a new instance of Movie', function () {
    expect(component).toBeDefined();
  });
});
