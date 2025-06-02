export interface TypeName {
  name: string;
}

export interface TypesProps {
  type: TypeName;
}

export interface AbilitiesProps {
  ability: TypeName;
}

export interface SpritesProps {
  other: {
    dream_world: {
      front_default: string;
    };
  };
}

export interface PokemonProps {
  id: number;
  name: string;
  abilities: AbilitiesProps[];
  height: number;
  weight: number;
  types: TypesProps[];
  category: string;
  sprites: SpritesProps;
}

export interface PokemonCardProps {
  id: number;
  name: string;
  types: TypesProps[];
  image: string;
  height: number;
  weight: number;
  abilities: AbilitiesProps[];
  category: string;
  clickSelectedPokemon: (pokemon: PokemonCardProps) => void;
}

export interface PokemonCardInfoProps {
  id: number;
  name: string;
  types: TypesProps[];
  image: string;
  height: number;
  weight: number;
  abilities: AbilitiesProps[];
  category: string;
  setSelectedPokemon: () => void;
}
