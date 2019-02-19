const User = require('./../../models/User');
const Post = require('./../../models/Post');
const Comment = require('./../../models/Comment');

module.exports = {
  Mutation: {
    async createComment(parent, {comment}) {
      const createdComment = await new Comment(comment).save();

      return {
        ...createdComment.toJSON(),
        id: createdComment._id.toString()
      };
    },

    updateComment(parent, {id, comment}) {
      return Comment.findByIdAndUpdate(id, {$set: {...comment}});
    },

    deleteComment(parent, {id}) {
      return Comment.findByIdAndDelete(id);
    }
  },

  Comment: {
    async author({author}) {
      const user = await User.findById(author);

      return {
        ...user.toJSON(),
        id: user._id.toString()
      };
    },

    async post({post}) {
      const it = await Post.findById(post);

      return {
        ...it.toJSON(),
        id: it._id.toString()
      };
    }
  }
};