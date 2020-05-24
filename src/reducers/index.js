const initialState = {
  pokemon: {
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
    types: ["Poison", "Grass", "Fire"],
    weight: 69,
  },
  pokemonList: [],
  loading: true,
  error:null,
  next:null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COLECTION_REQUEST":
      return {
        ...state,
        error: null,
        loading: true,
      };

    case "FETCH_COLECTION_SUCCESS":
      console.log(state.loading);
      
      const newColection = [...state.pokemonList, ...action.payload.colection]
      console.log(newColection);
      return {
        ...state,
        loading: false,
        pokemonList: [...newColection],
      };

    case "ON_POKEMON_SELECTED":
      console.log(state.pokemon);
      const selectedPokemon = state.pokemonList.find(
        ({ id }) => id === action.payload
      );
      return {
        ...state,
        pokemon: selectedPokemon,
      };

    default:
      return state;
  }
};

export default reducer;