import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  height: 130px;
  display: flex;
  justify-content: center;
`;

const WeatherItemIcon = styled.img`
  width: 168px;
`;

export const WeatherIcon = ({icon}) => {
  return (
    <IconWrapper>
      <WeatherItemIcon alt="icon" src={require(`../../assets/weather-icons/${icon}.svg`)} />
    </IconWrapper>
  );
};
