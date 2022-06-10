import { gql } from "@apollo/client";

const CREATE_SPECIFICATION = gql`
mutation CreateSpecification(
  $brand:string,
  $model:string,
  $description:string,
  $feature:string,
  $producer:string
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
  $name: string,
  $price: Float,
  $image: string,
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
mutation UploadFile($file: string){
  uploadFile(file: $file)
}
`

export { CREATE_PRODUCT, CREATE_SPECIFICATION, UPLOAD_IMAGE }