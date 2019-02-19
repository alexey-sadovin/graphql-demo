const User = require('./../../models/User');
const Post = require('./../../models/Post');
const Comment = require('./../../models/Comment');

module.exports = {
  Query: {
    async user(parent, {id}) {
      const user = await User.findOne({_id: id});
      return user.toJSON();
    },

    async users() {
      const users = await User.find({});
      return users.map(it => it.toJSON());
    }
  },

  Mutation: {
    async createUser(parent, {user}) {
      const createdUser = await new User(user).save();
      return createdUser.toJSON();
    },

    async updateUser(parent, {id, user}) {
      return User.findByIdAndUpdate(id, {$set: {...user}});
    }
  },

  User: {
    async posts({id}) {
      const posts = await Post.find({author: id});
      return posts.map(it => it.toJSON());
    },

    async comments({id}) {
      const comments = await Comment.find({author: id});
      return comments.map(it => it.toJSON());
    }
  }
};