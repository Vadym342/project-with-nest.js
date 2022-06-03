import { gql } from "@apollo/client";

const LOGIN = gql`
mutation Login(
  $username: String!,
  $password: String!
){
  login(loginUserDto:{
		username:$username,
    password: $password
  }){
		user{
      id,
      name,
      email,
      password,
    }
    accessToken
  }
}
`
const CREATE_USER = gql`
mutation CreateUser(
  $name: String,
  $email: String!,
  $password: String!,
  $organizationId: Int
  ){ 
  createUser(userDto: {
    name: $name,
    email:  $email,
    password: $password,
    organizationId: $organizationId
  }){
    id,
    name,
    email,
    role,
    organizationId,
  }
}
`

export { CREATE_USER, LOGIN }