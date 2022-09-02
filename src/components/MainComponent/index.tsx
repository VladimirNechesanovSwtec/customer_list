import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import Layout from '../common/Layout';
import AddCustomer from '../ businessLogicComponents/AddCustomer';
import { Customer } from '../../models/models';
import CustomerList from '../ businessLogicComponents/CustomerList';
import EditCustomer from '../ businessLogicComponents/EditCustomer';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const CustomerSettingSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 30%;
  padding: 40px;
`;

const CustomersListSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
  padding: 40px;
`;

const Separator = styled.div`
  width: 1px;
  height: 100%;
  background-color: #e2e8f0;
`;

const MainComponent = () => {
  const [customersList, setCustomersList] = useState<Customer[]>([]);
  const [editableCustomer, setEditableCustomer] = useState<Customer>();
  const [isEditMode, setEditMode] = useState(false);

  const addNewCustomer = useCallback(
    (customer: Customer) => {
      console.info('customer: ', customer);
      const currentCustomersList = customersList.concat([customer]);

      setCustomersList(currentCustomersList);
    },
    [customersList],
  );

  const onDelete = useCallback(
    (id: string) => {
      const updatedCustomersList = customersList.filter((customer) => customer.id !== id);

      setEditMode(false);
      setCustomersList(updatedCustomersList);
    },
    [customersList],
  );

  const onEdit = useCallback(
    (id: string) => {
      setEditableCustomer(customersList.find((customer) => customer.id === id));
      setEditMode(true);
    },
    [customersList],
  );

  const updateCustomersList = useCallback(
    (customer: Customer) => {
      const currentCustomersList: Customer[] = customersList.map((item) => {
        if (item.id === customer.id) {
          item = customer;
        }

        return item;
      });

      setEditMode(false);
      setCustomersList(currentCustomersList);
    },
    [customersList],
  );

  return (
    <MainContainer>
      <CustomerSettingSection>
        <Layout title={isEditMode ? 'Edit Customer' : 'Add Customer'}>
          {isEditMode ? (
            <EditCustomer
              editableCustomer={editableCustomer as Customer}
              onSave={updateCustomersList}
            />
          ) : (
            <AddCustomer onSave={addNewCustomer} />
          )}
        </Layout>
      </CustomerSettingSection>
      <Separator />
      <CustomersListSection>
        <Layout title="Customers">
          <CustomerList customersList={customersList} onEdit={onEdit} onDelete={onDelete} />
        </Layout>
      </CustomersListSection>
    </MainContainer>
  );
};

export default MainComponent;
