const mongoose = require('mongoose');

module.exports = () => mongoose.connect('mongodb://localhost/graphql-test', {
  useCreateIndex: true,
  useNewUrlParser: true
});