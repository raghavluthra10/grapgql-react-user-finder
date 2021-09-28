import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client"
import { ErrorLink, onError } from '@apollo/client/link/error';
import GetUsers from './components/GetUsers';
import Form from './components/Form';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if(graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql Error ${message} `) 
    })
  }
});

const  link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:6969/graphql"})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

function App() {
  return <ApolloProvider client={client} >
    {"  "}
    <Form  />
    <GetUsers  />
  </ApolloProvider>
}

export default App;
