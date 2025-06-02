import { styled } from "styled-components";

export const PokemonCardInfoComponent = styled.div`
  background-color: var(--primary-color);
  display: flex;
  flex-flow: column;
  padding: 20px 10px 20px 10px;
  width: 400px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
`;

export const CloseWrapper = styled.div`
  width: 100%;
  text-align: right;
`;

export const CloseCard = styled.button`
  align-self: flex-end;
  padding: 8px 10px 8px 10px;
  background-color: var(--red-400);
  color: var(--primary-color);
  font-weight: bold;
  border-radius: 10px;
  margin-right: 10px;
  border: none;
`;

export const TypesComponent = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
`;

export const Img = styled.img`
  width: 170px;
  height: 170px;
`;

export const TextContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const IdText = styled.p`
  color: var(--zinc-500);
  margin: 5px;
`;

export const NameText = styled.h3`
  margin: 5px;
  font-size: 28px;
`;

export const PokemonInfoComponent = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  width: 300px;
  gap: 40px;
`;

export const InfoComponent = styled.div`
  display: flex;
  flex-flow: column;
  width: fit-content;
  gap: 10px;

  .info-text-component {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
`;

export const PokemonInfoText = styled.h3`
  margin: 5px;
`;

export const TypeText = styled.div`
  display: flex;
  padding: 8px 18px 8px 18px;
  background-color: #d1d5dc;
  border-radius: 10px;
  margin: 5px;
`;
