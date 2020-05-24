import React from 'react';

import './pokemon-card.scss'

const pokemon = {
  abilities: ["Chlorophyll", "Overgrow"],
  height: 7,
  id: 1,
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  name: "Bulbasaur",
  stats: [
    { statName: "Speed", statValue: 45 },
    { statName: "Special-defense", statValue: 65 },
    { statName: "Special-attack", statValue: 65 },
    { statName: "Defense", statValue: 49 },
    { statName: "Attack", statValue: 49 },
    { statName: "HP", statValue: 45 },
  ],
  types: ["Poison", "Grass", "Fire", ],
  weight: 69,
};

const PokemonCard = () => {
  return (
    <div className="card_container">
      <div className="img_container">
        <img src={pokemon.image} alt="img" />
      </div>
      <div className="stat_container">
      <h2>{pokemon.name}</h2>
        <div className="stat_row">
          <div>Type</div>
          <div>
            {pokemon.types.join(', ')}
          </div>
        </div>
        {pokemon.stats
          .sort((a, b) => {
            if (a.statName < b.statName) {
              return -1;
            } else if (a.statName > b.statName) {
              return 1;
            } else {
              return 0;
            }
          })
          .map((item) => {
            return (
              <div className="stat_row" key={item.statName}>
                <div>{item.statName}</div>
                <div>{item.statValue}</div>
              </div>
            );
          })}
        <div className="stat_row">
          <div>Weight</div>
          <div>{pokemon.weight}</div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;


