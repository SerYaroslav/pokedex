const colectionRequested = () => {
  return {
    type: "FETCH_COLECTION_REQUEST"
  }
}

const colectionLoaded = (colection) => {
  return {
    type: "FETCH_COLECTION_SUCCESS",
    payload: colection,
  };
};

const colectionError = (error) => {
  return {
    type: "FETCH_COLECTION_FAILURE",
    payload: error,
  };
};

const onPokemonSelected = (pokemonId) => {
  return {
    type: "ON_POKEMON_SELECTED",
    payload: pokemonId,
  };
};


const fetchColection = (pokemonService, url)  => {
  console.log("test");
  console.log(`url${url}`);
  return (dispatch) => {
    dispatch(colectionRequested());
    pokemonService
      .getColection(url)
      .then((data) => dispatch(colectionLoaded(data)))
      .catch((err) => dispatch(colectionError(err)));
  }
};


export { onPokemonSelected, fetchColection };