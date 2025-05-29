import { useState } from "react";
import { PokemonCardProps, PokemonProps } from "../interface";
import {
  BodyComponent,
  PokemonListComponent,
} from "../styles/pokemonList.style";

import PokemonCard from "./PokemonCard";
import PokemonCardInfos from "./PokemonCardInfos";

const PokemonList = ({ allPokemons }: any) => {
  const [selectedPokemon, setSelectedPokemon] =
    useState<PokemonCardProps | null>(null);

  const clickSelectedPokemon = (allPokemons: PokemonCardProps) => {
    setSelectedPokemon(allPokemons);
  };

  console.log(allPokemons);
  

  return (
    <BodyComponent>
      <PokemonListComponent  isSelected={!!selectedPokemon} >
        {allPokemons.length > 0 ? (
          allPokemons.map((pokemon: PokemonProps, index: any) => (
            <div key={index}>
              <PokemonCard
                name={pokemon.name}
                id={pokemon.id}
                types={pokemon.types}
                height={pokemon.height}
                weight={pokemon.weight}
                abilities={pokemon.abilities}
                image={pokemon.sprites.other.dream_world.front_default}
                clickSelectedPokemon={clickSelectedPokemon}
              />
            </div>
          ))
        ) : (
          <p>Nenhum Pokemon encontrado</p>
        )}
      </PokemonListComponent>

      {selectedPokemon && (
        <div>
          <PokemonCardInfos
            name={selectedPokemon.name}
            id={selectedPokemon.id}
            types={selectedPokemon.types}
            image={selectedPokemon.image}
            height={selectedPokemon.height}
            weight={selectedPokemon.weight}
            abilities={selectedPokemon.abilities}
            clickSelectedPokemon={undefined}
            setSelectedPokemon={() => setSelectedPokemon(null)}
          />
        </div>
      )}
    </BodyComponent>
  );
};

export default PokemonList;
