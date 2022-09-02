import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import Text, { Variant, TextVariant } from '../../common/Text';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled(Text)`
  ${TextVariant} {
    margin-bottom: 40px;
  }
`;

const IntermediateLayer = styled.div`
  z-index: 1;
`;

type Props = {
  title: string;
};

const Layout: React.FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <Container>
      <Title variant={Variant.Header}>{title}</Title>
      <IntermediateLayer>{children}</IntermediateLayer>
    </Container>
  );
};

export default Layout;
