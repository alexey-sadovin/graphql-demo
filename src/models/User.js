const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jsonTransformer = require('./jsonTransformer');

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

UserSchema.options.toJSON = jsonTransformer([
  'email',
  'posts',
  'comments'
]);

module.exports = mongoose.model('User', UserSchema);