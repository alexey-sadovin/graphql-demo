module.exports = {
  createUser(email) {
    return JSON.stringify({
      query: `mutation {
        createUser(user: {email: "${email}"}) {
          id
          email
        }
      }`
    });
  },

  getUser(userId) {
    return JSON.stringify({
      query: `{
        user(id: "${userId}") {
          id
          email
          posts {
            id
            title
            body
          }
          comments {
            text
          }
        }
      }`
    });
  },

  getUsers() {
    return JSON.stringify({
      query: `{
        users {
          id
          email
        }
      }`
    });
  },

  getUsersWithPosts() {
    return JSON.stringify({
      query: `{
        users {
          id
          email
          posts {
            id
            title
          }
        }
      }`
    });
  },

  getUsersWithPostsAndComments() {
    return JSON.stringify({
      query: `{
        users {
          id
          email
          posts {
            id
            title
            comments {
              id
              text
            }
          }
        }
      }`
    });
  },

  createPost(userId) {
    return JSON.stringify({
      query: `mutation {
        createPost(post: {
          title: "It's a post of ${userId}",
          body: "Aaa bbb ccc, ${userId}",
          author: "${userId}"
        }) {
          id
          title
          author {
            id
            email
          }
        }
      }`
    });
  },

  createComment(userId, postId) {
    return JSON.stringify({
      query: `mutation {
        createComment(comment: {
          text: "It's a comment of ${userId} for post ${postId}",
          post: "${postId}",
          author: "${userId}"
        }) {
          id
          text
          author {
            id
            email
          }
          post {
            id
            title
            author {
              id
              email
            }
          }
        }
      }`
    });
  }
};