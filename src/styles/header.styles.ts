import { styled } from "styled-components";

export const HeaderComponent = styled.div`
  display: flex;
  flex-flow: row;
  align-content: center;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--primary-color);
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 400;
  margin: 10px 0 10px 0;
`;

export const RightComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LeftComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SearchInput = styled.input`
  background-color: var(--gray-300);
  color: var(--zinc-500);
  border: none;
  padding: 14px 100px 14px 20px;
  border-radius: 8px;
`;
