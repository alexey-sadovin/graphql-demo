module.exports = `
  type User {
    id: String!
    email: String!
    posts: [Post!]!
    comments: [Comment!]!
  }
  
  type Query {
    user(id: ID!): User!
    users: [User!]!
  }
  
  type Mutation {
    createUser(user: CreateUserInput): User!
    updateUser(id: String!, user: UpdateUserInput!): User!
    deleteUser(id: String!): User!
  }
  
  input CreateUserInput {
    email: String!
  }
  
  input UpdateUserInput {
    email: String
  } 
`;