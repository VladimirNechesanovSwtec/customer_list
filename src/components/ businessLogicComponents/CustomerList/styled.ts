import styled from 'styled-components';

import Text, { Variant, TextVariant } from '../../common/Text';

export const CommonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 16px;
  align-items: center;
`;

export const ScrollableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  margin-bottom: 16px;
  overflow-y: scroll;
`;

export const ValueText = styled(Text)`
  ${TextVariant} {
    display: flex;
    align-items: center;
    font-weight: 400;
  }
`;

export const AvatarContainer = styled.div`
  width: 32px;
  height: 32px;
  background: #f1f5f9;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const NameSection = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 300px;
  align-items: center;
`;

export const CompanySection = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 300px;
`;

export const EmailSection = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 300px;
`;

export const StatusSection = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 70px;
`;

export const ActionsSection = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 70px;
`;

export const StatusMarker = styled.div<{ isAdmin: boolean }>`
  width: 49px;
  height: 24px;
  background: ${({ isAdmin }) => (isAdmin ? '#0ea5e9' : '#E2E8F0')};
  border-radius: 4px;
`;

export const EditIcon = styled.img.attrs({
  src: `/static/icons/Edit.svg`,
})`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DeleteIcon = styled.img.attrs({
  src: `/static/icons/Trash.svg`,
})`
  width: 24px;
  height: 24px;
  margin-left: 15px;
  cursor: pointer;
`;
