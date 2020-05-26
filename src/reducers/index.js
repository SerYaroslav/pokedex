const initialState = {
  pokemon: null,
  selectedType: "All",
  pokemonList: [],
  filteredList: [],
  loading: true,
  error:null,
  next:null
};

const pokemonFilter = (colection, type) => {
  if(type === "All") {
    return colection
  }
  return (
    colection.filter(item => item.types.includes(type))
  )
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COLECTION_REQUEST":
      return {
        ...state,
        error: null,
        loading: true,
      };

    case "FETCH_COLECTION_SUCCESS":
      const newColection = [...state.pokemonList, ...action.payload.colection]
      const nextPage = action.payload.next;
      return {
        ...state,
        loading: false,
        pokemonList: newColection,
        filteredList: newColection,
        next: nextPage,
        selectedType: "All"
      };

    case "FETCH_COLECTION_FAILURE":
      return{
        ...state,
        loading: false,
        error: action.payload
      }

    case "ON_POKEMON_SELECTED":
      const selectedPokemon = state.pokemonList.find(
        ({ id }) => id === action.payload
      );
      return {
        ...state,
        pokemon: selectedPokemon,
      };

    case "ON_TYPE_SELECTED":
      const filteredColection = pokemonFilter(state.pokemonList, action.payload);
      return {
        ...state,
        selectedType: action.payload,
        filteredList: filteredColection,
      };

    default:
      return state;
  }
};

export default reducer;