import React, { useMemo } from 'react';
import Jdenticon from 'react-jdenticon';

import { Customer } from '../../../models/models';
import {
  ActionsSection,
  AvatarContainer,
  CommonWrapper,
  CompanySection,
  Container,
  DeleteIcon,
  EditIcon,
  EmailSection,
  NameSection,
  ScrollableContainer,
  StatusMarker,
  StatusSection,
  ValueText,
} from './styled';
import Text, { Variant } from '../../common/Text';

type Props = {
  customersList: Customer[];

  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

const CustomerList: React.FC<Props> = ({ customersList, onEdit, onDelete }) => {
  const header = useMemo(() => {
    return (
      <Container>
        <NameSection>
          <Text variant={Variant.Title} color="#94a3b8">
            Name
          </Text>
        </NameSection>
        <CompanySection>
          <Text variant={Variant.Title} color="#94a3b8">
            Company
          </Text>
        </CompanySection>
        <EmailSection>
          <Text variant={Variant.Title} color="#94a3b8">
            Email
          </Text>
        </EmailSection>
        <StatusSection>
          <Text variant={Variant.Title} color="#94a3b8">
            Admin
          </Text>
        </StatusSection>
        <ActionsSection>
          <Text variant={Variant.Title} color="#94a3b8">
            Actions
          </Text>
        </ActionsSection>
      </Container>
    );
  }, []);

  const values = useMemo(() => {
    return customersList.map((customer) => {
      return (
        <Container key={customer.id}>
          <NameSection>
            <AvatarContainer>
              <Jdenticon size="30" value={customer.firstName} />
            </AvatarContainer>
            <ValueText
              variant={Variant.Title}
            >{`${customer.firstName} ${customer.lastName}`}</ValueText>
          </NameSection>
          <CompanySection>
            <ValueText variant={Variant.Title}>{customer.company}</ValueText>
          </CompanySection>
          <EmailSection>
            <ValueText variant={Variant.Title}>{customer.email}</ValueText>
          </EmailSection>
          <StatusSection>
            <ValueText variant={Variant.Title}>
              <StatusMarker isAdmin={customer.status === 'Administrator'} />
            </ValueText>
          </StatusSection>
          <ActionsSection>
            <EditIcon onClick={() => onEdit(customer.id)} />
            <DeleteIcon onClick={() => onDelete(customer.id)} />
          </ActionsSection>
        </Container>
      );
    });
  }, [customersList, onDelete, onEdit]);

  return (
    <CommonWrapper>
      {header}
      <ScrollableContainer>{values}</ScrollableContainer>
    </CommonWrapper>
  );
};

export default CustomerList;
