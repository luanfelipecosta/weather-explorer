import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FindCityPage from './find-city/find-city.page';
import WeatherResultsPage from './weather-results/weather-results.page';
import WeatherDetailsPage from './weather-details/weather-details.page';
import Header from '../../components/header/header.component';

export const WeatherRouter = () => (
  <>
    <Header />
    <Switch>
      <Route path="/weather-result" component={WeatherResultsPage} />
      <Route path="/weather-details" component={WeatherDetailsPage} />
      <Route exact path="/" component={FindCityPage} />
    </Switch>
  </>
);
