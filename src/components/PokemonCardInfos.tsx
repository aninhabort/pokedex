import {
  PokemonCardInfoComponent,
  Img,
  TypesComponent,
  TypeText,
  NameText,
  IdText,
  TextContent,
  PokemonInfoText,
  PokemonInfoComponent,
  InfoComponent,
  CloseCard,
  CloseWrapper,
} from "../styles/pokemonCardInfos.style";

import { PokemonCardInfoProps } from "../interface";
import { typesColors } from "../hooks/Colors";
import { PokemonIdFormat } from "../hooks/idFormat";

const PokemonCardInfos = ({
  name,
  id,
  types,
  image,
  height,
  weight,
  abilities,
  category,
  setSelectedPokemon,
}: PokemonCardInfoProps) => {

  return (
    <PokemonCardInfoComponent>
      <CloseWrapper>
        <CloseCard onClick={setSelectedPokemon}>X</CloseCard>
      </CloseWrapper>

      <Img src={image} alt={name} />

      <TextContent>
        <IdText>{PokemonIdFormat(id)}</IdText>
        <NameText>{name}</NameText>
      </TextContent>

      <>
        {types[1] !== undefined ? (
          <TypesComponent>
            <TypeText style={typesColors(types[0].type.name)}>
              {types[0].type.name}
            </TypeText>
            <TypeText style={typesColors(types[1].type.name)}>
              {types[1].type.name}
            </TypeText>
          </TypesComponent>
        ) : (
          <TypeText style={typesColors(types[0].type.name)}>
            {types[0].type.name}
          </TypeText>
        )}
      </>

      <PokemonInfoText>Weakness</PokemonInfoText>

      <PokemonInfoComponent>
        <InfoComponent>
          <div className="info-text-component">
            <PokemonInfoText>Height</PokemonInfoText>
            <TypeText>
              {(height / 10).toFixed(1)} m
            </TypeText>
          </div>

          <div className="info-text-component">
            <PokemonInfoText>Weight</PokemonInfoText>
            <TypeText>
              {(weight / 10).toFixed(1)} kg
            </TypeText>
          </div>
        </InfoComponent>

        <InfoComponent>
          <div className="info-text-component">
            <PokemonInfoText>Category</PokemonInfoText>
            <TypeText>{category.replace('Pokémon','').trim()}</TypeText>
          </div>

          <div className="info-text-component">
            <PokemonInfoText>Abilities</PokemonInfoText>
            <TypeText>{abilities[0].ability.name}</TypeText>
          </div>
        </InfoComponent>
      </PokemonInfoComponent>

      <PokemonInfoText>Evolution</PokemonInfoText>
    </PokemonCardInfoComponent>
  );
};

export default PokemonCardInfos;
