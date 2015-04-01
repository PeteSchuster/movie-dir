'use strict';

describe('MovieList', function () {
  var React = require('react/addons');
  var MovieList, component;

  beforeEach(function () {
    MovieList = require('components/MovieList.js');
    component = React.createElement(MovieList);
  });

  it('should create a new instance of MovieList', function () {
    expect(component).toBeDefined();
  });
});
