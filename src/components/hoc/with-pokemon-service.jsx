import React from "react";
import { ServiceConsumer } from "../service-context";

const withPokemonService = () => (Wrapped) => {
  return (props) => {
    return (
      <ServiceConsumer>
        {(pokemonService) => {
          return <Wrapped {...props} pokemonService={pokemonService} />;
        }}
      </ServiceConsumer>
    );
  };
};

export default withPokemonService;
