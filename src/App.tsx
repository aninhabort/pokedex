import './App.css';

import Header from "./components/Header"
import PokemonList from "./components/PokemonList"
import { useEffect, useState } from "react";
import { PokemonProps } from './interface';

const url = "https://pokeapi.co/api/v2/pokemon/";

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
        const resp = await fetch(`${url}${pokemon.name}`);
        return resp.json();
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
