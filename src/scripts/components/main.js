'use strict';

var MovieDirApp = require('./MovieDirApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={MovieDirApp}>
    <Route name="/" handler={MovieDirApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
