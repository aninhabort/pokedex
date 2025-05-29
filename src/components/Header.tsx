import { List, MagnifyingGlass, Sliders } from "@phosphor-icons/react";
import { HeaderComponent, LeftComponent, RightComponent, SearchInput, Title } from "../styles/header.styles";

const Header = () => {
return (
    <HeaderComponent>
      <RightComponent>
        <List size={24} />
        <Title>Pokedex</Title>
      </RightComponent>

      <LeftComponent>
        <SearchInput type="text" placeholder="name or number"></SearchInput>
        <MagnifyingGlass size={24} />
        <Sliders size={24} />
      </LeftComponent>
    </HeaderComponent>
  );
};

export default Header;