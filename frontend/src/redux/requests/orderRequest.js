
import { gql } from "@apollo/client";

const GET_PRODUCTS_BY_IDS = gql`
query GetProductsByArrayIds($arrayIds: [Int!]!){
  getProductsByArrayIds(arrayIds:$arrayIds){
    id,
    name,
    price
  }
}
`


export { GET_PRODUCTS_BY_IDS }