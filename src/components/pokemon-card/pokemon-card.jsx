import React from 'react';

import {connect} from 'react-redux';


import './pokemon-card.scss'


const PokemonCard = ({pokemon}) => {

  if(!pokemon) {
    return null
  }
  console.log(pokemon);
  return (
    <div className="card_container">
      <div className="img_container">
        <img src={pokemon.image} alt="img" />
      </div>
      <div className="stat_container">
        <h2>{pokemon.name}</h2>
        <div className="stat_row">
          <div>Type</div>
          <div>{pokemon.types.join(", ")}</div>
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
        <div className="stat_row">
          <div>Total moves</div>
          <div>{pokemon.totalMoves}</div>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = ({ pokemon }) => {
  return {pokemon}
};

export default connect(mapStateToProps, null)( PokemonCard)


