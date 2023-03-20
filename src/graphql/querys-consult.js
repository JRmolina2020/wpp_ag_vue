const queryCustomer = `
query AllCustomerQuery {
  customers {
    id
    name
    phone
  }
}
`;
export { queryCustomer };
