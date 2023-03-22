import gql from "graphql-tag";
const saveProduct = gql`
  mutation addProduct(
    $id: String!
    $name: String!
    $price: String!
    $category_id: String!
    $status: String!
  ) {
    addProduct(
      id: $id
      name: $name
      price: $price
      category_id: $category_id
      status: $status
    ) {
      id
      name
      price
      category_id
      status
    }
  }
`;
const UpdateProduct = gql`
  mutation updateProduct($id: String!, $name: String!, $price: String!) {
    updateProduct(id: $id, product: { name: $name, price: $price }) {
      id
      name
      price
    }
  }
`;
const DeleteProduct = gql`
  mutation deleteProduct($id: String!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
export { saveProduct, UpdateProduct, DeleteProduct };
