const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jsonTransformer = require('./jsonTransformer');

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

PostSchema.options.toJSON = jsonTransformer([
  'title',
  'body',
  'author',
  'comments'
]);

module.exports = mongoose.model('Post', PostSchema);