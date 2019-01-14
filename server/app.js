const express = require("express");

const graphqlHTTP = require("express-graphql");

const schema = require("./schema/schema");
const mongoose = require("mongoose");
const app = express();

//connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect(
  "mongodb://<dbuser>:<dbpassword>@ds133077.mlab.com:33077/gql-ninja"
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
