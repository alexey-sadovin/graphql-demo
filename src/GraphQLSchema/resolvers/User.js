const User = require('./../../models/User');
const Post = require('./../../models/Post');
const Comment = require('./../../models/Comment');

module.exports = {
  Query: {
    async user(parent, {id}) {
      const user = await User.findOne({_id: id});
      return {
        ...user.toJSON(),
        id: user._id.toString()
      };
    },

    async users() {
      const users = await User.find({});

      return users.map(it => ({
        ...it.toJSON(),
        id: it._id.toString()
      }));
    }
  },

  Mutation: {
    async createUser(parent, {user}) {
      const createdUser = await new User(user).save();

      return {
        ...createdUser.toJSON(),
        id: createdUser._id.toString()
      };
    },

    async updateUser(parent, {id, user}) {
      return User.findByIdAndUpdate(id, {$set: {...user}});
    }
  },

  User: {
    async posts({id}) {
      const posts = await Post.find({author: id});

      return posts.map(it => ({
        ...it.toJSON(),
        id: it._id.toString()
      }));
    },

    async comments({id}) {
      const comments = await Comment.find({author: id});
      return comments.map(it => ({
        ...it.toJSON(),
        id: it._id.toString()
      }));
    }
  }
};