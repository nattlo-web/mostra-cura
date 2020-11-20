import React from "react";
import { Header as HeaderComponent, Menu, MenuItem } from "./header.style";
const Header = ({ visible }) => {
  return (
    <HeaderComponent visible={visible} className="fadeIn">
      <Menu>
        <MenuItem>
          <a href="#">Início</a>
        </MenuItem>
        <MenuItem>
          <a href="#">Manifesto</a>
        </MenuItem>
        <MenuItem>
          <a href="#">Programação</a>
        </MenuItem>
        <MenuItem>
          <a href="#">Equipe</a>
        </MenuItem>
      </Menu>
    </HeaderComponent>
  );
};

export default Header;
