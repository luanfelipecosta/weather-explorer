import React from 'react';
import { WeatherIconText, WeatherItemWrapper } from './weather-item.styled';
import { WeatherIcon } from '../weather-icon/weather-icon.component';
import { getDate } from '../../utils/helpers';

export const WeatherItem = ({ dt, icon, onClick }) => {
  const date = getDate(dt);
  return (
    <WeatherItemWrapper onClick={onClick}>
      <WeatherIcon icon={icon} />
      <WeatherIconText>{date}</WeatherIconText>
    </WeatherItemWrapper>
  );
};
