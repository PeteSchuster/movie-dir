'use strict';

describe('MovieFilter', function () {
  var React = require('react/addons');
  var MovieFilter, component;

  beforeEach(function () {
    MovieFilter = require('components/MovieFilter.js');
    component = React.createElement(MovieFilter);
  });

  it('should create a new instance of MovieFilter', function () {
    expect(component).toBeDefined();
  });
});
