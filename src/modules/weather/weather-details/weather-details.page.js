import React from 'react';
import { WeatherIcon } from '../../../components';
import { Content, H2, Label } from './weather-details.styled';
import { toCelcius } from '../../../utils/helpers';

const WeatherDetailsPage = ({ location: { state } }) => {
  const { weather, temp, city } = state;
  const icon = weather[0].icon;
  return (
    <div style={{ paddingTop: 55 }}>
      <Content>
        {icon && <WeatherIcon icon={icon} />}
        <H2>{city}</H2>
      </Content>
      <Content>
        <Label>{weather[0].description}</Label>
        <Label>Mínima: {toCelcius(temp.min)} º C</Label>
        <Label>Máxima: {toCelcius(temp.max)} º C</Label>
      </Content>
    </div>
  );
};

export default WeatherDetailsPage;
