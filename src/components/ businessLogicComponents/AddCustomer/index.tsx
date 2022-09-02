import React, { useCallback, useEffect, useState } from 'react';
import _uniqueId from 'lodash/uniqueId';

import { Customer } from '../../../models/models';
import Input from '../../common/Input';
import Password from '../../common/Password';
import Selector from '../../common/Selector';
import { Variant } from '../../common/Text';
import validateEmail from '../utils';
import {
  ButtonText,
  ComponySection,
  Container,
  EmailSection,
  NameSection,
  PasswordSection,
  SaveButton,
  StatusSection,
} from './style';

const INITIAL_STATE_VALUE: Customer = {
  id: '',
  firstName: '',
  lastName: '',
  company: '',
  status: 'User',
  email: '',
  password: '',
};

type Props = {
  onSave: (customer: Customer) => void;
};

const AddCustomer: React.FC<Props> = ({ onSave }) => {
  const [customer, setCustomer] = useState<Customer>(INITIAL_STATE_VALUE);
  const [onSaveClick, setSaveClick] = useState(false);

  useEffect(() => {
    return () => {
      setCustomer(INITIAL_STATE_VALUE);
    };
  }, []);

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
      customer.password.length < 8
    ) {
      setSaveClick(true);
      return null;
    } else {
      const currentCustomer = { ...customer, id: _uniqueId() };

      setSaveClick(false);
      setCustomer(INITIAL_STATE_VALUE);
      onSave(currentCustomer);
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
        <PasswordSection>
          <Password
            title="Password"
            value={customer?.password || ''}
            isError={onSaveClick && customer.password.length < 8}
            onChange={(value: string) => updateCustomer('password', value)}
          />
        </PasswordSection>
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
    customer.password,
    customer.status,
    onClick,
    onSaveClick,
    updateCustomer,
  ]);

  return renderContent();
};

export default AddCustomer;
