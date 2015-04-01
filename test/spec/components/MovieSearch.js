'use strict';

describe('MovieSearch', function () {
  var React = require('react/addons');
  var MovieSearch, component;

  beforeEach(function () {
    MovieSearch = require('components/MovieSearch.js');
    component = React.createElement(MovieSearch);
  });

  it('should create a new instance of MovieSearch', function () {
    expect(component).toBeDefined();
  });
});
