import gql from "graphql-tag";
const saveCustomer = gql`
  mutation addCustomer($name: String!, $phone: String!) {
    addCustomer(id: "", name: $name, phone: $phone) {
      id
      name
      phone
    }
  }
`;
const UpdateCustomer = gql`
  mutation updateCustomer($id: ID!, $name: String!, $phone: String!) {
    updateCustomer(id: $id, customer: { name: $name, phone: $phone }) {
      id
      name
      phone
    }
  }
`;
const DeleteCustomer = gql`
  mutation deleteCustomer($id: ID!) {
    deleteCustomer(id: $id) {
      id
    }
  }
`;
export { saveCustomer, UpdateCustomer, DeleteCustomer };
