import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
query{
  getAllCategories{
  id,
  name
}
}
`

const CREATE_CATEGORY = gql`
mutation CreateCategory($name: String!){
  createCategory(CategoryDto:
  {
    name: $name
  }){
    id,
    name
  }
}
`

const GET_CATEGORY_BY_ID = gql`
query GetCategoryById($id: Int!) {
  getCategoryById(id:$id){
    id,
    name
  }
}
`

export { GET_CATEGORIES, GET_CATEGORY_BY_ID, CREATE_CATEGORY };