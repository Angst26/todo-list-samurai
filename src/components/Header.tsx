import styled from "styled-components";
import { COLORS } from "../shared/colors";
import { Link } from "react-router-dom";
import { SearchComponent } from './SearchComponent.tsx'


const HeaderContainer = styled.header`
  background-color: ${COLORS.header_bg};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Определение стилей для логотипа
const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${COLORS.primary};
`;

// Определение стилей для навигационных кнопок
const NavButton = styled(Link)`
  text-decoration: none;
  color: ${COLORS.primary};
  padding: 10px 15px;
  border: 1px solid ${COLORS.border_bg};
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${COLORS.hover_color_bg};
  }
`;

function HeaderComponent() {
  return (
    <HeaderContainer >
          <Logo>MyApp</Logo>
          <div>
            <NavButton to="/">Home</NavButton>
            <NavButton to="/about">About</NavButton>
            <NavButton to="/contact">Contact</NavButton>
          </div>
          <SearchComponent />
        </HeaderContainer >)
}

export default HeaderComponent;