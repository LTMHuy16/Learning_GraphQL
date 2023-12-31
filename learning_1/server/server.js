const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const { connectDB } = require("./config/configDB");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  connectDB();

  console.log("App is running");
});
