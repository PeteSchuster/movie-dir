'use strict';

describe('MovieBrowse', function () {
  var React = require('react/addons');
  var MovieBrowse, component;

  beforeEach(function () {
    MovieBrowse = require('components/MovieBrowse.js');
    component = React.createElement(MovieBrowse);
  });

  it('should create a new instance of MovieBrowse', function () {
    expect(component).toBeDefined();
  });
});
