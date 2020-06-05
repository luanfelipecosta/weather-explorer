import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { WeatherRouter } from '../modules';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={WeatherRouter} />
    </Switch>
  </Router>
);

export default AppRouter;
