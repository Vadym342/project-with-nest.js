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
  $name: String,
  $price: Float,
  $image: String,
  $discount: Int,
  $organizationId: Int,
  $categoryId: Int,
  $specificationId: Int,
  $isFavorite: boolean,
  $rating: Int
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

const UPLOAD_IMAGE = gql`
mutation UploadFile($file: Upload!){
  uploadFile(file: $file)
}
`

export { CREATE_PRODUCT, CREATE_SPECIFICATION, UPLOAD_IMAGE }