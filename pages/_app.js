import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/Layout';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import reducers from "../store/reducers";

let composeEnhancers = compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <Layout>
        <Component {...pageProps } />
     </Layout>
    </Provider> 
  );
}

export default MyApp