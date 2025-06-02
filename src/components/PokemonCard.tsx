import {
  IdText,
  Img,
  NameText,
  PokemonCardComponent,
  TextContent,
  TypeText,
  TypesComponent,
} from "../styles/pokemonCard.style";

import { PokemonCardProps } from "../interface";
import { typesColors } from "../hooks/Colors";
import { PokemonIdFormat } from "../hooks/idFormat";

const PokemonCard = ({ name, id, types, image, height, weight, abilities, category, clickSelectedPokemon }: PokemonCardProps) => {
  return (
    <PokemonCardComponent onClick={() => clickSelectedPokemon({ name, id, types, image, height, weight, abilities, category })}
    >
      <Img src={image} alt={name} />
      
      <TextContent>
        <IdText>{PokemonIdFormat(id)}</IdText>
        <NameText>{name}</NameText>
      </TextContent>
      
      <>
        {types[1] !== undefined ? (
          <TypesComponent>
            <TypeText style={typesColors(types[0].type.name)}>{types[0].type.name}</TypeText>
            <TypeText style={typesColors(types[1].type.name)}>{types[1].type.name}</TypeText>
          </TypesComponent>
        ) : (
          <TypeText style={typesColors(types[0].type.name)}>{types[0].type.name}</TypeText>
        )}
      </>
    </PokemonCardComponent>
  );
};

export default PokemonCard;
