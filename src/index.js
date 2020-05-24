import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import App from './components/app';
import ErrorBoundry from "./components/error-boundry";

import { ServiceProvider } from './components/service-context';
import PokemonService from './pokemon-service';

const pokemonService = new PokemonService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ServiceProvider value={pokemonService}>
        <App/>
      </ServiceProvider>
    </ErrorBoundry>
  </Provider>,
   document.getElementById('root')
);