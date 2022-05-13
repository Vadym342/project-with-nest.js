import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './index.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const client = new ApolloClient({
  uri: 'http://localhost:5001/graphql',
  cache: new InMemoryCache()
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
