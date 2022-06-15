import { gql } from "@apollo/client";

const CREATE_SPECIFICATION = gql`
mutation CreateSpecification(
  $brand:String,
  $model:String,
  $description:String,
  $feature:String,
  $producer:String
  ){
  createSpecification(SpecificationDto:{
    brand: $brand,
    model: $model,
    description: $description,
    feature: $feature,
    producer:$producer
  }){
    id
  }
}
`

const CREATE_PRODUCT = gql`
mutation CreateProduct(
  $name: String!,
  $price: Float!,
  $image: String!,
  $discount: Float!,
  $organizationId: Int,
  $categoryId: Int!,
  $specificationId: Int,
  $isFavorite: Boolean,
  $rating: Float!
  ){
  createProduct(productDto:{
    name:$name,
    price:$price,
    image:$image,
    discount:$discount,
    organizationId:$organizationId,
    categoryId:$categoryId,
    specificationId:$specificationId,
    isFavorite:$isFavorite,
    rating:$rating,
  }){
    id,
    organizationId,
    specificationId
  }
}
`

const UPDATE_PRODUCT = gql`
mutation UpdateProduct(
  $id:Int!,
  $name: String,
  $price: Float,
  $image: String,
  $discount: Float,
  $organizationId: Int,
  $categoryId: Int,
  $specificationId: Int,
  $isFavorite: Boolean,
  $rating: Float
){
  updateProduct(updateProductDto:{
    id:$id,
    name:$name,
    price:$price,
    image:$image,
    discount:$discount,
    organizationId:$organizationId,
    categoryId:$categoryId,
    specificationId:$specificationId,
    isFavorite:$isFavorite,
    rating:$rating,
  }){
    id,
    organizationId,
    categoryId,
    specificationId
  }
}
`

const UPLOAD_IMAGE = gql`
mutation UploadFile($file: Upload!){
  uploadFile(file: $file)
}
`

export { CREATE_PRODUCT, CREATE_SPECIFICATION, UPLOAD_IMAGE, UPDATE_PRODUCT };