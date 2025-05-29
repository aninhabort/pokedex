export interface TypesProps {
  type: {
    name: string;
  };
}

interface AbilitiesProps {
  ability: {
    name: string
  }
}

export interface PokemonProps {
  id: number;
  name: string;
  abilities: AbilitiesProps[],
  height: number;
  weight: number;
  types: TypesProps[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

export interface PokemonCardProps {
  id: number;
  name: string;
  types: TypesProps[];
  image: string;
  height: number;
  weight: number;
  abilities: AbilitiesProps[],
  clickSelectedPokemon: any
}

export interface PokemonCardInfoProps {
  id: number;
  name: string;
  types: TypesProps[];
  image: string;
  height: number;
  weight: number;
  abilities: AbilitiesProps[],
  clickSelectedPokemon: any
  setSelectedPokemon: any
}
