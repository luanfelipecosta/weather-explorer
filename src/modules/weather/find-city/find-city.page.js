import React, { useState } from 'react';
import { Container, H1, SuccessButton, Input, ErrorMessage } from './find-city.styled';
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
    <Container>
      <H1>Enter a City and State</H1>
      <Input placeholder="São Paulo" value={search} onChange={handleChange} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <SuccessButton onClick={handleSearch}>Enviar</SuccessButton>
    </Container>
  );
};

export default FindCityPage;
