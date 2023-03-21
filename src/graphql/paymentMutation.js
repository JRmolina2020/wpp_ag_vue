import gql from "graphql-tag";
const savePayment = gql`
  mutation addPayment($name: String!, $status: Boolean!) {
    addPayment(id: "", name: $name, status: $status) {
      id
      name
      status
    }
  }
`;
const UpdatePayment = gql`
  mutation updatePayment($id: ID!, $name: String!, $status: Boolean!) {
    updatePayment(id: $id, payment: { name: $name, status: $status }) {
      id
      name
      status
    }
  }
`;
const DeletePayment = gql`
  mutation deletePayment($id: ID!) {
    deletePayment(id: $id) {
      id
    }
  }
`;
export { savePayment, UpdatePayment, DeletePayment };
