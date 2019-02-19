module.exports = `
  type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
  }
  
  type Mutation {
    createComment(comment: CreateCommentInput!): Comment!
    updateComment(id: ID!, comment: UpdateCommentInput): Comment!
    deleteComment(id: ID!): Comment!
  }
  
  input CreateCommentInput {
    text: String!
    post: ID!
    author: ID!
  }
  
  input UpdateCommentInput {
    text: String
  }
`;