export type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  status: 'User' | 'Administrator';
  email: string;
  password: string;
};
