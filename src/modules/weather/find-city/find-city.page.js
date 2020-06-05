import React, { useState } from 'react';
import { Container, H1, SuccessButton, Input, ErrorMessage, AppName } from './find-city.styled';
import { fetchForecast } from '../../../utils/api';

const FindCityPage = ({ history: { push } }) => {
  const [search, setValue] = useState('');
  const [error] = useState();

  const handleChange = (evt) => setValue(evt.target.value);

  const onSuccess = ({
    data: {
      list,
      city: { name },
    },
  }) => push('/weather-result', { days: list, cityName: name });

  const onError = (e) => console.error(e);

  const handleSearch = () => fetchForecast(search).then(onSuccess).catch(onError);

  return (
    <>
      <AppName>
        <span aria-label="weather emojis" role="img">
          🌈{' '}
        </span>
        ClimaExplorer
        <span aria-label="weather emojis" role="img">
          {' '}
          ❄️
        </span>
      </AppName>
      <Container>
        <H1>Entre com uma cidade ou estado</H1>
        <Input placeholder="São Paulo" value={search} onChange={handleChange} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SuccessButton onClick={handleSearch}>Enviar</SuccessButton>
      </Container>
    </>
  );
};

export default FindCityPage;
