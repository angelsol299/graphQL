const graphql = require("graphql");
const_ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//dummy data

var books = [
  { name: "name of the wind", genre: "fantasy", id: "1" },
  { name: "going bananas", genre: "real", id: "2" },
  { name: "love for animals", genre: "dogs", id: "3" }
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to get data from db/other source
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
