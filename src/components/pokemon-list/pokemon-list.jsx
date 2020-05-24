import React, {useEffect} from 'react';

import {connect} from 'react-redux';
import { bindActionCreators } from "redux";

import {withPokemonService} from '../hoc';
import { onPokemonSelected, fetchColection } from "../../actions";


import './pokemon-list.scss'


const PokemonList = ({pokemonList, loading, onPokemonSelected, fetchColection, pokemonService, next}) => {

  useEffect(() => {
    fetchColection(pokemonService, "/pokemon?offset=24&limit=12");
  }, [pokemonService, fetchColection]);
  console.log(pokemonList);
  if(loading){
    return <h2>Loading</h2>
  }
  console.log(pokemonList); 

  const toLoadNextPage = () => {
    fetchColection(pokemonService, "/pokemon?offset=24&limit=12");
  }
  
  return (
    <div className="list_container">
      {
      console.log(`fdsfs${pokemonList}`)}{
        pokemonList.map(item => {
          return (
            <div className="list_item" onClick={() => onPokemonSelected(item.id)} key={item.name}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <div className="type_container">
                {
                  item.types.map(type => {
                    return (
                      <span className={type.toLowerCase()} key={type}>
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
      <button className="load_btn" onClick={toLoadNextPage}>Load More</button>
    </div>
  );
}

const mapStateToProps = ({ pokemonList, loading }) => {
  return {
    pokemonList,
    loading
  }
};

const mapDispatchToProps = dispatch => 
bindActionCreators(
  {
    onPokemonSelected,
    fetchColection,
  },
  dispatch
);

export default withPokemonService()(connect(mapStateToProps, mapDispatchToProps)( PokemonList))