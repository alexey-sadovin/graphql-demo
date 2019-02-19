const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jsonTransformer = require('./jsonTransformer');

const CommentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  }
});

CommentSchema.options.toJSON = jsonTransformer([
  'text',
  'author',
  'post'
]);

module.exports = mongoose.model('Comment', CommentSchema);