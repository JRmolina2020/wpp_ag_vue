import gql from "graphql-tag";
const SaveCategory = gql`
  mutation addCategory($name: String!, $status: Boolean!) {
    addCategory(id: "", name: $name, status: $status) {
      id
      name
      status
    }
  }
`;


const UpdateCategory = gql`
  mutation updateCategory($id: ID!, $name: String!, $status: Boolean!) {
    updateCategory(id: $id, category: { name: $name, status: $status }) {
      id
      name
      status
    }
  }
`;
const DeleteCategory = gql`
  mutation deleteCategory($id: ID!) {
    deleteCategory(id: $id) {
      id
    }
  }
`;
export { SaveCategory, UpdateCategory, DeleteCategory };
