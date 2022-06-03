import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
query{
  getAllCategories{
  id,
  name
}
}
`

export { GET_CATEGORIES }