import './App.css';

import Header from "./components/Header"
import PokemonList from "./components/PokemonList"
import { useEffect, useState } from "react";
import { PokemonProps } from './interface';

export const url = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [pokemonUrlList, setPokemonUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [allPokemons, setALLPokemons] = useState<PokemonProps[]>([]);

  const getPokemons = async () => {
    const resp = await fetch(pokemonUrlList);
    const data = await resp.json();
    setPokemonUrl(data.next);

    const pokemonData = await Promise.all(
      data.results.map(async (pokemon: any) => {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const pokemonDetails = await resp.json();

        const speciesResp = await fetch(pokemonDetails.species.url);
        const speciesData = await speciesResp.json();

        const genus =
          speciesData.genera.find((g: any) => g.language.name === "en")?.genus || "Unknown";

        return {
          ...pokemonDetails,
          category: genus,
        };
      })
    );
  
    setALLPokemons(pokemonData);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div>
      <Header />
      <PokemonList allPokemons={allPokemons} />
    </div>
  )
}

export default App
