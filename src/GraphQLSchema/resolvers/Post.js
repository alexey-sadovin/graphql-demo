const User = require('./../../models/User');
const Post = require('./../../models/Post');
const Comment = require('./../../models/Comment');

module.exports = {
  Mutation: {
    async createPost(parent, {post}) {
      const createdPost = await new Post(post).save();

      return {
        ...createdPost.toJSON(),
        id: createdPost._id.toString()
      };
    },

    updatePost(parent, {id, post}) {
      return Post.findByIdAndUpdate(id, {$set: {...post }});
    },

    deletePost(parent, {id}) {
      return Post.findByIdAndDelete(id);
    }
  },

  Post: {
    async author({author}) {
      const user = await User.findById(author);

      return {
        ...user.toJSON(),
        id: user._id.toString()
      };
    },

    async comments({author}) {
      const comments = await Comment.find({author});

      return comments.map(it => ({
        ...it.toJSON(),
        id: it._id.toString()
      }));
    }
  }
};