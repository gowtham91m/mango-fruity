import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  font-size: 25px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 80px;
  // background-color: rgba(0, 0, 0, 0.5);
  background-color: black;
  // box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
`;

export const MenuItem = styled.li`
  list-style: none;
  font-size: 25px;
  // height: 20px;
  color: white;
  display: flex;
  @media only screen and (max-width: 1000px) {
    // width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLink = styled(Link)`
  padding: 20px;
  color: white;
  text-decoration: none;
  &:hover {
    color: gray;
    background: black;
  }
`;

export const LoginItem = styled.span`
  background: none;
  font-size: 20px;
  border: none;
  color: white;
  cursor: pointer;
`;
