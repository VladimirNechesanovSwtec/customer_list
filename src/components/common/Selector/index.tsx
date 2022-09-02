import React from 'react';
import styled from 'styled-components';

import Text, { Variant, TextVariant } from '../../common/Text';

const SwitchSelector = styled.div`
  background: #f1f5f9;
  border: 1px solid #f1f5f9;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  padding: 4px;
`;

const Container = styled.div<{ isSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: ${({ isSelected }) => (isSelected ? '#fff' : 'transparent')};
  border-radius: 8px;
  cursor: pointer;
`;

const SelectedStatus = styled(Text)`
  ${TextVariant} {
    font-weight: 400;
    color: #0f172a;
    padding: 8px 12px;
  }
`;

const Title = styled(Text)`
  ${TextVariant} {
    color: #475569;
    margin-bottom: 10px;
  }
`;

type Props = {
  title: string;
  options: string[];
  selectedOption: string;

  onChange: (option: string) => void;
};

const Selector: React.FC<Props> = ({ title, options, selectedOption, onChange }) => {
  return (
    <>
      <Title variant={Variant.Title}>{title}</Title>
      <SwitchSelector>
        {options.map((option) => {
          return (
            <Container
              key={option}
              isSelected={option === selectedOption}
              onClick={() => onChange(option)}
            >
              <SelectedStatus variant={Variant.Title}>{option}</SelectedStatus>
            </Container>
          );
        })}
      </SwitchSelector>
    </>
  );
};

export default Selector;
