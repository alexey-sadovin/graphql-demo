const {mergeResolvers} = require('merge-graphql-schemas');

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

const resolvers = [User, Post, Comment];

module.exports = mergeResolvers(resolvers);