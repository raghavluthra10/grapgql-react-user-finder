const express = require('express');
const app = express();
const PORT = 6969;
// const userData = require('./MOCK_DATA.json');
const graphql = require('graphql');
const  {GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList, GraphQLID} = graphql;
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schema/index')

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,

}))

app.get('/', (req, res) => {
    res.send('Hi');
})


app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})