import { styled } from "styled-components";

export const BodyComponent = styled.div`
  background-color: var(--red-400);
  margin: 20px;
  display: flex;
  flex-flow: row wrap;
`;

export const PokemonListComponent = styled.div<{ isSelected: boolean }>`
  width: ${({ isSelected }) => (isSelected ? "70%" : "100%")};
  display: flex;
  justify-content: ${({ isSelected }) => (isSelected ? "" : "space-around")};
  flex-flow: row wrap;
  gap: 32px;
`;