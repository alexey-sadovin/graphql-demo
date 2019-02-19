const got = require('got');
const mongoConnect = require('../mongoConnect');
const request = require('./request-generators');
const User = require('../src/models/User');
const Post = require('../src/models/Post');
const Comment = require('../src/models/Comment');
const url = 'http://localhost:4000/graphql';
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

let firstUserId;
let secondUserId;

let postId;

mongoConnect()
  .then(() => {
    return Promise.all([
      User.deleteMany({}),
      Post.deleteMany({}),
      Comment.deleteMany({})
    ]);
  })
  .then(() => {
    const body = request.createUser('first@example.com');
    return got.post(url, {headers, body});
  })
  .then(res => {
    const response = JSON.parse(res.body);

    console.log('first created user response:',
      JSON.stringify(response, null, 2));

    firstUserId = response.data.createUser.id;

    const body = request.getUser(firstUserId);
    return got.post(url, {headers, body});
  })
  .then(res => {
    console.log('fetch user by ID response:',
      JSON.stringify(JSON.parse(res.body), null, 2));

    const body = request.createUser('second@example.com');
    return got.post(url, {headers, body});
  })
  .then(res => {
    const response = JSON.parse(res.body);

    console.log('second created user response:',
      JSON.stringify(response, null, 2));

    secondUserId = response.data.createUser.id;

    const body = request.getUsers();
    return got.post(url, {headers, body});
  })
  .then(res => {
    console.log('fetch users response:',
      JSON.stringify(JSON.parse(res.body), null, 2));

    const body = request.createPost(firstUserId);
    return got.post(url, {headers, body});
  })
  .then(res => {
    const response = JSON.parse(res.body);

    console.log('first created post of first user response:',
      JSON.stringify(JSON.parse(res.body), null, 2));

    postId = response.data.createPost.id;

    const body = request.createPost(secondUserId);
    return got.post(url, {headers, body});
  })
  .then(res => {
    console.log('first created post of second user response:',
      JSON.stringify(JSON.parse(res.body), null, 2));

    const body = request.createPost(secondUserId);
    return got.post(url, {headers, body});
  })
  .then(res => {
    console.log('second created post of second user response:',
      JSON.stringify(JSON.parse(res.body), null, 2));

    const body = request.getUsersWithPosts();
    return got.post(url, {headers, body});
  })
  .then(res => {
    console.log('fetch users with posts response:',
      JSON.stringify(JSON.parse(res.body), null, 2));

    const body = request.createComment(firstUserId, postId);
    return got.post(url, {headers, body});
  })
  .then(res => {
    console.log('create comment response:',
      JSON.stringify(JSON.parse(res.body), null, 2));

    const body = request.getUsersWithPostsAndComments();
    return got.post(url, {headers, body});
  })
  .then(res => {
    console.log('fetch users with posts and comments response:',
      JSON.stringify(JSON.parse(res.body), null, 2));
  })
  .then(() => {
    process.exit(0);
  })
  .catch(err => {
    console.error('something went wrong:', err.body || err);
    process.exit(1);
  });