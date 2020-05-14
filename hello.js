//run the hello.js file using node hello.js

const { graphql, buildSchema } = require('graphql');

let schema = buildSchema(`
  type Query {
      hello: String
  }
`);

let root = { hello: () => 'Hello World!' };

graphql(schema, '{ hello }', root).then((res) => {
  console.log(res);
});
