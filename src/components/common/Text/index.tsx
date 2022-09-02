import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

export enum Variant {
  Header = 'Header',
  Title = 'Title',
  Subtitle = 'Subtitle',
}

const getSize = (variant: Variant) => {
  switch (variant) {
    case Variant.Header:
      return '20px';
    case Variant.Title:
      return '16px';
    case Variant.Subtitle:
      return '14px';

    default:
      break;
  }
};

const getLineHeight = (variant: Variant) => {
  switch (variant) {
    case Variant.Header:
    case Variant.Title:
      return '24px';
    case Variant.Subtitle:
      return '20px';

    default:
      break;
  }
};

const getFontWeight = (variant: Variant) => {
  switch (variant) {
    case Variant.Header:
      return 700;
    case Variant.Title:
      return 500;
    case Variant.Subtitle:
      return 400;

    default:
      break;
  }
};

export const TextVariant = styled.div<{ textVariant: Variant; color: string }>`
  font-weight: ${({ textVariant }) => getFontWeight(textVariant)};
  font-size: ${({ textVariant }) => getSize(textVariant)};
  line-height: ${({ textVariant }) => getLineHeight(textVariant)};
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
`;

type Props = {
  className?: string;
  variant: Variant;
  color?: string;
};

const Text: React.FC<PropsWithChildren<Props>> = ({ className = '', children, variant, color }) => {
  return (
    <div className={className}>
      <TextVariant textVariant={variant} color={color ?? '#0F172A'}>
        {children}
      </TextVariant>
    </div>
  );
};

export default Text;
