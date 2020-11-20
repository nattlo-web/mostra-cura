import styled from "styled-components";

export const Header = styled.header`
  position: static;
  width: 100%;
  background-color: #fff;
  /* transition: display 0.6s ease-in; */
  display: ${(props) => {
    const { visible } = props;
    return !visible ? "none" : "flex";
  }};
  align-items: center;
  justify-content: flex-start;
  z-index: 9999;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 0 50px;
  width: 100%;
  flex-wrap: wrap;
`;

export const MenuItem = styled.li`
  color: var(--color-orange);
  font-size: 18px;
  padding: 10px 20px;
  margin: 0 32px;
  font-family: Infini;
  &:hover {
    font-weight: bold;
  }
`;
