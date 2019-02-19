module.exports = `
  type Post {
    id: ID!
    title: String!
    body: String!
    author: User!
    comments: [Comment!]!
  }
  
  type Mutation {
    createPost(post: CreatePostInput): Post!
    updatePost(id: ID!, post: UpdatePostInput): Post!
    deletePost(id: ID!): Post!
  }
  
  input CreatePostInput {
    title: String!
    body: String!
    author: ID!
  }
  
  input UpdatePostInput {
    title: String
    body: String
    published: Boolean
  }
`;