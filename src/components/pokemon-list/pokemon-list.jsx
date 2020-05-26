import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";

import { onPokemonSelected, fetchColection } from "../../actions";
import {withPokemonService} from "../hoc";

import Spiner from '../spinner';

import './pokemon-list.scss'

const PokemonList = ({filteredList, loading, onPokemonSelected, fetchColection, pokemonService, next}) => {

  useEffect(() => {
    fetchColection(pokemonService, "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12");
  }, [fetchColection, pokemonService]);

  if(loading){
    return <Spiner/>
  }

  const toLoadNextPage = () => {
    fetchColection(pokemonService, next);
  }
  
  return (
    <div className="list_container">
      {
        filteredList.map(item => {
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

const mapStateToProps = ({ filteredList, loading, next }) => {
  return {
    filteredList,
    loading,
    next,
  };
};

const mapDispatchToProps = dispatch => 
  bindActionCreators(
    {
      onPokemonSelected,
      fetchColection,
    },
    dispatch
);

export default withPokemonService()(
  connect(mapStateToProps, mapDispatchToProps)(PokemonList)
);