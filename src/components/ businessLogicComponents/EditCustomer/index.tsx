import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { Customer } from '../../../models/models';
import Input from '../../common/Input';
import Selector from '../../common/Selector';
import Text, { Variant, TextVariant } from '../../common/Text';
import validateEmail from '../utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NameSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 24px;
  justify-content: space-between;
`;

const ComponySection = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

const StatusSection = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

const EmailSection = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

const SaveButton = styled.div`
  background: #0ea5e9;
  border-radius: 8px;
  cursor: pointer;
`;

const ButtonText = styled(Text)`
  ${TextVariant} {
    display: flex;
    text-align: center;
    color: #ffffff;
    padding: 8px 12px;
    justify-content: center;
    align-items: center;
  }
`;

type Props = {
  editableCustomer: Customer;
  onSave: (customer: Customer) => void;
};

const EditCustomer: React.FC<Props> = ({ editableCustomer, onSave }) => {
  const [customer, setCustomer] = useState<Customer>(editableCustomer);
  const [onSaveClick, setSaveClick] = useState(false);

  const updateCustomer = useCallback(
    (fieldName: string, value: string) => {
      const currentCustomer: Customer = { ...customer, [fieldName]: value };

      setCustomer(currentCustomer);
    },
    [customer],
  );

  const onClick = useCallback(() => {
    if (
      !customer.company ||
      !validateEmail(customer.email) ||
      !customer.firstName ||
      !customer.lastName ||
      !customer.password
    ) {
      setSaveClick(true);
      return null;
    } else {
      setSaveClick(false);
      onSave(customer);
    }
  }, [customer, onSave]);

  const renderContent = useCallback(() => {
    return (
      <Container>
        <NameSection>
          <Input
            title="First Name"
            value={customer?.firstName || ''}
            errorState={onSaveClick && !customer.firstName ? 'Required' : ''}
            onChange={(value: string) => updateCustomer('firstName', value)}
          />
          <Input
            title="Last Name"
            value={customer?.lastName || ''}
            errorState={onSaveClick && !customer.lastName ? 'Required' : ''}
            onChange={(value: string) => updateCustomer('lastName', value)}
          />
        </NameSection>
        <ComponySection>
          <Input
            title="Company"
            value={customer?.company || ''}
            errorState={onSaveClick && !customer.company ? 'Required' : ''}
            onChange={(value: string) => updateCustomer('company', value)}
          />
        </ComponySection>
        <StatusSection>
          <Selector
            title="Status"
            options={['User', 'Administrator']}
            selectedOption={customer.status}
            onChange={(option: string) => updateCustomer('status', option)}
          />
        </StatusSection>
        <EmailSection>
          <Input
            title="Email"
            value={customer?.email || ''}
            errorState={onSaveClick && !validateEmail(customer.email) ? 'Invalid email' : ''}
            onChange={(value: string) => updateCustomer('email', value)}
          />
        </EmailSection>
        <SaveButton onClick={onClick}>
          <ButtonText variant={Variant.Title}>Save</ButtonText>
        </SaveButton>
      </Container>
    );
  }, [
    customer.company,
    customer.email,
    customer.firstName,
    customer.lastName,
    customer.status,
    onClick,
    onSaveClick,
    updateCustomer,
  ]);

  return renderContent();
};

export default EditCustomer;
