const userData = require('../MOCK_DATA.json');
const graphql = require('graphql');
const  {GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList, GraphQLID} = graphql;
const UserType = require('./TypeDefs/UserType.js')


// this is how we create a query \/
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: { 
            type: new GraphQLList(UserType),
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                return userData;
            }
        }
    }
});

// This is how we create a mutation \/
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parent, args) {
                userData.push({ 
                    id: userData.length + 1, 
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    password: args.password 
                })
                return args;
            }
        }
    }
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })
