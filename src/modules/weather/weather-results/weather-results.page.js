import React from 'react';
import { Title, WeatherList } from './weather-results.styled';
import { WeatherItem } from '../../../components';

const WeatherResults = ({ location: { state }, history: { goBack, push } }) => {
  if (!state) goBack();

  const { cityName, days } = state;

  const onClick = (dayDetails) => () =>
    push('/weather-details', {
      ...dayDetails,
      city: cityName,
    });

  return (
    <>
      <Title>{cityName}</Title>
      <WeatherList>
        {days.map((item) => {
          const icon = item.weather[0].icon;
          return <WeatherItem onClick={onClick(item)} key={String(Math.random())} icon={icon} dt={item.dt} />;
        })}
      </WeatherList>
    </>
  );
};

export default WeatherResults;
