import { gql } from '@apollo/client';

const GET_PRODUCTS_BY_IDS = gql`
query GetProductsByArrayIds($arrayIds: [Int!]!){
  getProductsByArrayIds(arrayIds:$arrayIds){
    id,
    name,
    image,
    price
  }
}
`
const CREATE_SHIPMENT = gql`
mutation createShipment(
  $orderId: Int,
  $phone: string,
  $fullName: string,
  $city: string, 
  $country: string,
  $address: string
  ){
createShipment(ShipmentDto:{
    orderId:$orderId,
    phone: $phone,
    fullName:$fullName,
    city: $city,
    country: $country,
    address: $address
  }){
    id,
    orderId,
    fullName
  }
}
`
const UPDATE_ORDER = gql`
mutation UpdateOrder($id: Int, $shipmentId: Int){
  updateOrder(updateOrderInput:{
    id:$id,
    shipmentId:$shipmentId
  }){
    id,
    shipmentId
}
}
`

const CREATE_ORDER = gql`
mutation CreateOrder($ownerId: Int){
  createOrder(orderDto :{
    ownerId:$ownerId,
    status:PENDING
  }){
    id,
    ownerId,
    status
  }
}
`

export { GET_PRODUCTS_BY_IDS, CREATE_ORDER, UPDATE_ORDER, CREATE_SHIPMENT }