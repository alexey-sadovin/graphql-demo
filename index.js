const express = require('express');
const graphql = require('express-graphql');
const mongoConnect = require('./mongoConnect');
const GraphQLSchema = require('./src/GraphQLSchema');

const app = express();
const port = 4000;

mongoConnect()
  .then(() => {
    console.log('connected to mongodb');

    app.use('/graphql', graphql({
      schema: GraphQLSchema
    }));

    app.listen(port, () => console.log(`server listening on ${port}`));
  })
  .catch(err => {
    console.error('Something went wrong', err);
    process.exit(1);
  });