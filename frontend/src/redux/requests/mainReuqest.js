import { gql } from "@apollo/client";

const GET_FLASHDEALSPRODUCT = gql`
query FlashDeals($page:Int!, $pageSize:Int!){
  getFlashDealsProducts(page: $page, pageSize: $pageSize){
    id,
    name,
		price,
    rating,
    discount,
    image,
    isFavorite
  }
}
`
const GET_ALLPRODUCTS = gql`
query GetAllProducts($categoryId: Int){
  getAllProducts(categoryId:$categoryId){
    id,
    name,
		price,
    rating,
    discount,
    image,
    isFavorite
  }
}
`

const GET_ALLPRODUCTS1 = gql`
query{ 
  getAllProducts{
    id,
    name,
		price,
    rating,
    discount,
    image,
    isFavorite
  }
}
`

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

export {
  GET_CATEGORIES, GET_CATEGORY_BY_ID,
  CREATE_CATEGORY, GET_FLASHDEALSPRODUCT, GET_ALLPRODUCTS,
  GET_ALLPRODUCTS1
};