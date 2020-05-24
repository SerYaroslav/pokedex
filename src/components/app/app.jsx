import React from 'react';

import PokemonCard from '../pokemon-card';
import PokemonList from '../pokemon-list';

import './app.scss'

function App() {
  return (
    <main className="app_container">
        <PokemonList />
        <PokemonCard />
    </main>
  );
}

export default App;
