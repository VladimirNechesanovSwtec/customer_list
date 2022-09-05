import styled from 'styled-components';

import Text, { TextVariant } from '../../common/Text';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NameSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 24px;
  justify-content: space-between;
`;

export const ComponySection = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

export const StatusSection = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

export const EmailSection = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

export const PasswordSection = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

export const SaveButton = styled.div`
  background: #0ea5e9;
  border-radius: 8px;
  cursor: pointer;
`;

export const ButtonText = styled(Text)`
  ${TextVariant} {
    display: flex;
    text-align: center;
    color: #ffffff;
    padding: 8px 12px;
    justify-content: center;
    align-items: center;
  }
`;
