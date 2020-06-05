import styled from 'styled-components';
import { Button, Input as RawInput } from 'antd';
import BG from '../../../assets/pattern.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${BG});
  height: 100vh;
  width: 100vw;
`;

export const H1 = styled.h1`
  color: #fff;
  font-weight: 300;
  font-size: 42px;
`;

export const AppName = styled.h1`
  color: #fff;
  font-size: 55px;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 120px;
`;

export const SuccessButton = styled(Button)`
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
  border-radius: 8px;
  margin-top: ${({ inline }) => (inline ? 0 : '16px')};
  margin-left: ${({ inline }) => (!inline ? 0 : '16px')};
`;

export const Input = styled(RawInput)`
  max-width: 240px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin: 14px 0;
`;
