import { styled } from "styled-components";

export const PokemonCardComponent = styled.div`
  background-color: var(--primary-color);
  display: flex;
  flex-flow: column;
  padding: 20px 10px 20px 10px;
  width: 200px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
`;

export const TypesComponent = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
`;

export const Img = styled.img`
  width: 110px;
  height: 110px;
`;

export const TextContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const IdText = styled.p`
  color: var(--zinc-500);
  margin: 5px;
`;

export const NameText = styled.h3`
  margin: 5px;
`;

export const TypeText = styled.p`
  padding: 8px 18px 8px 18px;
  border-radius: 10px;
  margin: 5px;
`;
