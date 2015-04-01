'use strict';

describe('MovieSummary', function () {
  var React = require('react/addons');
  var MovieSummary, component;

  beforeEach(function () {
    MovieSummary = require('components/MovieSummary.js');
    component = React.createElement(MovieSummary);
  });

  it('should create a new instance of MovieSummary', function () {
    expect(component).toBeDefined();
  });
});
