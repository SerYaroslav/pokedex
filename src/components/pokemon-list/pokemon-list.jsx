import React from 'react';

import './pokemon-list.scss'

const pokList = [
  {
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
    types: ["Poison", "Grass", "Electric", "Fire", "Water"],
    weight: 69,
  },
  {
    abilities: ["Chlorophyll", "Overgrow"],
    height: 7,
    id: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    name: "Bulbasaur",
    stats: [
      { statName: "Speed", statValue: 45 },
      { statName: "Special-defense", statValue: 65 },
      { statName: "Special-attack", statValue: 65 },
      { statName: "Defense", statValue: 49 },
      { statName: "Attack", statValue: 49 },
      { statName: "HP", statValue: 45 },
    ],
    types: ["Poison"],
    weight: 69,
  },
  {
    abilities: ["Chlorophyll", "Overgrow"],
    height: 7,
    id: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    name: "Bulbasaur",
    stats: [
      { statName: "Speed", statValue: 45 },
      { statName: "Special-defense", statValue: 65 },
      { statName: "Special-attack", statValue: 65 },
      { statName: "Defense", statValue: 49 },
      { statName: "Attack", statValue: 49 },
      { statName: "HP", statValue: 45 },
    ],
    types: ["Poison", "Grass"],
    weight: 69,
  },
  {
    abilities: ["Chlorophyll", "Overgrow"],
    height: 7,
    id: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    name: "Bulbasaur",
    stats: [
      { statName: "Speed", statValue: 45 },
      { statName: "Special-defense", statValue: 65 },
      { statName: "Special-attack", statValue: 65 },
      { statName: "Defense", statValue: 49 },
      { statName: "Attack", statValue: 49 },
      { statName: "HP", statValue: 45 },
    ],
    types: ["Poison", "Grass"],
    weight: 69,
  },
  {
    abilities: ["Chlorophyll", "Overgrow"],
    height: 7,
    id: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    name: "Bulbasaur",
    stats: [
      { statName: "Speed", statValue: 45 },
      { statName: "Special-defense", statValue: 65 },
      { statName: "Special-attack", statValue: 65 },
      { statName: "Defense", statValue: 49 },
      { statName: "Attack", statValue: 49 },
      { statName: "HP", statValue: 45 },
    ],
    types: ["Poison", "Grass"],
    weight: 69,
  },
  {
    abilities: ["Chlorophyll", "Overgrow"],
    height: 7,
    id: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    name: "Bulbasaur",
    stats: [
      { statName: "Speed", statValue: 45 },
      { statName: "Special-defense", statValue: 65 },
      { statName: "Special-attack", statValue: 65 },
      { statName: "Defense", statValue: 49 },
      { statName: "Attack", statValue: 49 },
      { statName: "HP", statValue: 45 },
    ],
    types: ["Poison", "Grass"],
    weight: 69,
  },
  {
    abilities: ["Chlorophyll", "Overgrow"],
    height: 7,
    id: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    name: "Bulbasaur",
    stats: [
      { statName: "Speed", statValue: 45 },
      { statName: "Special-defense", statValue: 65 },
      { statName: "Special-attack", statValue: 65 },
      { statName: "Defense", statValue: 49 },
      { statName: "Attack", statValue: 49 },
      { statName: "HP", statValue: 45 },
    ],
    types: ["Poison", "Grass"],
    weight: 69,
  },
  {
    abilities: ["Chlorophyll", "Overgrow"],
    height: 7,
    id: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    name: "Bulbasaur",
    stats: [
      { statName: "Speed", statValue: 45 },
      { statName: "Special-defense", statValue: 65 },
      { statName: "Special-attack", statValue: 65 },
      { statName: "Defense", statValue: 49 },
      { statName: "Attack", statValue: 49 },
      { statName: "HP", statValue: 45 },
    ],
    types: ["Poison", "Grass"],
    weight: 69,
  },
  {
    abilities: ["Chlorophyll", "Overgrow"],
    height: 7,
    id: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    name: "Bulbasaur",
    stats: [
      { statName: "Speed", statValue: 45 },
      { statName: "Special-defense", statValue: 65 },
      { statName: "Special-attack", statValue: 65 },
      { statName: "Defense", statValue: 49 },
      { statName: "Attack", statValue: 49 },
      { statName: "HP", statValue: 45 },
    ],
    types: ["Poison", "Grass"],
    weight: 69,
  },
  {
    abilities: ["Chlorophyll", "Overgrow"],
    height: 7,
    id: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    name: "Bulbasaur",
    stats: [
      { statName: "Speed", statValue: 45 },
      { statName: "Special-defense", statValue: 65 },
      { statName: "Special-attack", statValue: 65 },
      { statName: "Defense", statValue: 49 },
      { statName: "Attack", statValue: 49 },
      { statName: "HP", statValue: 45 },
    ],
    types: ["Poison", "Grass"],
    weight: 69,
  },
  {
    abilities: ["Chlorophyll", "Overgrow"],
    height: 7,
    id: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    name: "Bulbasaur",
    stats: [
      { statName: "Speed", statValue: 45 },
      { statName: "Special-defense", statValue: 65 },
      { statName: "Special-attack", statValue: 65 },
      { statName: "Defense", statValue: 49 },
      { statName: "Attack", statValue: 49 },
      { statName: "HP", statValue: 45 },
    ],
    types: ["Poison", "Grass"],
    weight: 69,
  },
  {
    abilities: ["Chlorophyll", "Overgrow"],
    height: 7,
    id: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    name: "Bulbasaur",
    stats: [
      { statName: "Speed", statValue: 45 },
      { statName: "Special-defense", statValue: 65 },
      { statName: "Special-attack", statValue: 65 },
      { statName: "Defense", statValue: 49 },
      { statName: "Attack", statValue: 49 },
      { statName: "HP", statValue: 45 },
    ],
    types: ["Poison", "Grass"],
    weight: 69,
  },
];

const PokemonList = () => {
  return (
    <div className="list_container">
      {
        pokList.map(item => {
          return (
            <div className="list_item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <div className="type_container">
                {
                  item.types.map(type => {
                    return (
                      <span className={type.toLowerCase()}>
                        {type}
                      </span>
                    )
                  })
                }
              </div>
            </div>
          );
        })
      }
      <button className="load_btn">Load More</button>
    </div>
  );
}

export default PokemonList;