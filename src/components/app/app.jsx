import React from 'react';

import Header from '../header';
import TypeFilter from '../type-filter';
import PokemonList from '../pokemon-list';
import PokemonCard from '../pokemon-card';

import './app.scss'

function App() {
  return (
    <main className="app_container">
      <Header />
      <TypeFilter/>
      <div className="content_container">
        <PokemonList />
        <PokemonCard />
      </div>
    </main>
  );
}

export default App;
