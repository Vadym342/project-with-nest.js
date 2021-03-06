import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import { StepsProvider } from './modules/MbararaAdmin/components/CreateProduct/Context/Context';
import { createUploadLink } from 'apollo-upload-client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  //@ts-ignore
  link: createUploadLink({
    uri: 'http://localhost:5001/graphql',
  }),
});
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <StepsProvider>
            <App />
          </StepsProvider>
        </ApolloProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
