'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var MovieDirApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    MovieDirApp = require('components/MovieDirApp.js');
    component = React.createElement(MovieDirApp);
  });

  it('should create a new instance of MovieDirApp', function () {
    expect(component).toBeDefined();
  });
});
