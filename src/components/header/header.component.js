import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, SearchBar, Title } from './header.styled';
import { fetchForecast } from '../../utils/api';
import { Input, SuccessButton } from '../../modules/weather/find-city/find-city.styled';

export const Header = () => {
  const [search, setValue] = useState('');
  const { push } = useHistory();

  const goHome = () => push('/');

  const handleSearch = () => fetchForecast(search).then(onSuccess).catch(onError);

  const handleChange = (evt) => setValue(evt.target.value);

  const onSuccess = ({
    data: {
      list,
      city: { name },
    },
  }) => push('/weather-result', { days: list, cityName: name });

  const onError = (e) => console.error(e);

  return (
    <Container>
      <Title onClick={goHome}>
        <span aria-label="weather emojis" role="img">
          🌈{' '}
        </span>
        ClimaExplorer
        <span aria-label="weather emojis" role="img">
          {' '}
          ❄️
        </span>
      </Title>
      <SearchBar>
        <Input placeholder="São Paulo" onChange={handleChange} value={search} />
        <SuccessButton onClick={handleSearch} inline>
          Enivar
        </SuccessButton>
      </SearchBar>
    </Container>
  );
};
