import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import styled from 'styled-components';

import Text, { Variant, TextVariant } from '../../common/Text';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled(Text)`
  ${TextVariant} {
    color: #475569;
    margin-bottom: 10px;
  }
`;

const PasswordInput = styled(Input.Password)`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 8px 12px;

  input {
    outline: none;
    width: 90%;
  }

  &:focus {
    box-shadow: 0px 0px 0px 2px #bae6fd;
  }
`;

const ErrorState = styled(Text)<{ isError: boolean }>`
  ${TextVariant} {
    display: flex;
    align-items: center;
    color: ${({ isError }) => (isError ? '#f87171' : '#94A3B8')};
    margin-top: 8px;
  }
`;

type Props = {
  title: string;
  value: string;
  isError: boolean;

  onChange: (value: string) => void;
};

const Password: React.FC<Props> = ({ title, value, isError, onChange }) => {
  return (
    <Container>
      <Title variant={Variant.Title}>{title}</Title>
      <PasswordInput
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <ErrorState variant={Variant.Subtitle} isError={isError}>
        8+ characters
      </ErrorState>
    </Container>
  );
};

export default Password;
