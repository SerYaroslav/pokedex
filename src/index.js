import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import App from './components/app';
import ErrorBoundry from "./components/error-boundry";

import { ServiceProvider } from './components/service-context';
import PokService from './pok-service';

const pokService = new PokService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ServiceProvider value={pokService}>
        <App/>
      </ServiceProvider>
    </ErrorBoundry>
  </Provider>,
   document.getElementById('root')
);