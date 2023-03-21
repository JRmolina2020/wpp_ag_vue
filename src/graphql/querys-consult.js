const queryCustomer = `
query AllCustomerQuery {
  customers {
    id
    name
    phone
  }
}
`;
const queryPayment = `
query AllCategoryQuery {
  payments {
    id
    name
    status
  }
  }
`;
export { queryCustomer, queryPayment };
