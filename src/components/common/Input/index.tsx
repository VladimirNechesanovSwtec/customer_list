import React from 'react';
import styled from 'styled-components';

import Text, { Variant, TextVariant } from '../../common/Text';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 24px;

  &:last-child {
    margin: 0;
  }
`;

const Title = styled(Text)`
  ${TextVariant} {
    color: #475569;
    margin-bottom: 10px;
  }
`;

const TextInput = styled.input`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 8px 12px;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #bae6fd;
  }
`;

const ErrorState = styled(Text)`
  ${TextVariant} {
    display: flex;
    align-items: center;
    color: #f87171;
    margin-top: 8px;
  }
`;

type Props = {
  title: string;
  value: string;
  errorState?: string;

  onChange: (value: string) => void;
};

const Input: React.FC<Props> = ({ title, value, errorState, onChange }) => {
  return (
    <Container>
      <Title variant={Variant.Title}>{title}</Title>
      <TextInput value={value} onChange={(e) => onChange(e.target.value)} />
      {errorState && <ErrorState variant={Variant.Subtitle}>{errorState}</ErrorState>}
    </Container>
  );
};

export default Input;
