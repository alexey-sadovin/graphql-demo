const {mergeTypes} = require('merge-graphql-schemas');

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

const typeDefs = [User, Post, Comment];

module.exports = mergeTypes(typeDefs, {all: true});