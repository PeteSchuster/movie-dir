'use strict';

describe('Movie-summary', function () {
  var React = require('react/addons');
  var Movie-summary, component;

  beforeEach(function () {
    Movie-summary = require('components/Movie-summary.js');
    component = React.createElement(Movie-summary);
  });

  it('should create a new instance of Movie-summary', function () {
    expect(component).toBeDefined();
  });
});
