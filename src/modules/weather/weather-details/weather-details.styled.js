import styled from 'styled-components';
import { Button, Input as RawInput } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H2 = styled.h2`
  color: #333;
  font-weight: 300;
  font-size: 30px;
  margin: 32px 0;
`;

export const Label = styled.h2`
  color: #333;
  font-weight: 300;
  font-size: 34px;
  margin: 32px 0;
`;

export const SuccessButton = styled(Button)`
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
  border-radius: 8px;
  margin-top: 16px;
`;

export const Input = styled(RawInput)`
  max-width: 240px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin: 14px 0;
`;
