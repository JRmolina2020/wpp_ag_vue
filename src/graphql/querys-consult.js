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
query AllPaymentQuery {
  payments {
    id
    name
    status
  }
  }
`;
const queryCategory = `
query AllCategoryQuery {
  categories {
    id
    name
    status
  }
  }
`;



const queryProduct = `
query AllProductQuery {
  products {
    id
    name
    price
    category_id
    status
  }
}
`;


export { queryCustomer, queryPayment, queryCategory, queryProduct };
