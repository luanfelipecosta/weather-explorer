import styled from 'styled-components';
import { Button, Input as RawInput } from 'antd';
import BG from '../../../assets/pattern.svg';

export const Container = styled.div`
  padding-top: 28vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${BG});
  height: 100vh;
  width: 100vw;
`;

export const H1 = styled.h1`
  color: #fff;
  font-weight: 300;
  font-size: 42px;
`;

export const SuccessButton = styled(Button)`
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
  border-radius: 8px;
  margin-top: ${({ inline }) => (inline ? 0 : '16px')};
  margin-left: ${({ inline }) => (!inline ? 0 : '16px')};
  transition: all 0.25s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #4ea04e;
    border-color: #439b43;
  }
`;

export const Input = styled(RawInput)`
  max-width: 240px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin: 14px 0;
`;
