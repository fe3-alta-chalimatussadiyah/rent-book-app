import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';

// Redux Settings
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from "../store/reducers";

const composeEnhancers = compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// Apollo Settings
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://vast-anchorage-71651.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
