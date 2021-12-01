import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 992px) {
    display: none;
  }
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
  font-size: 20px;
  color: white;
  display: flex;
  @media only screen and (max-width: 1000px) {
    &:hover {
      border: none;
    }
  }
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 20px;
  @media screen and (max-width: 992px) {
    padding: 0px;
  }
`;
export const Manu = styled.span`
  padding: 20px;
  color: white;
  text-decoration: none;
  &:hover {
    color: gray;
    background: black;
  }
  cursor: pointer;
`;
export const LoginItem = styled.span`
  background: none;
  font-size: 15px;
  border: none;
  color: white;
  cursor: pointer;
`;

export const Mobileview = styled.div`
  display: none;
  @media screen and (max-width: 992px) {
    display: block;
  }
`;

export const Sidenav = styled.div`
  width: 50%;
  height: 100%;
  position: fixed;
  z-index: 1;
  background-color: black;
  top: 0;
  opacity: 80%;
  z-index: 10;
`;

export const SidenavContainer = styled.div`
  margin: 0 auto;
`;

export const SideMenuItem = styled.li`
  list-style: none;
  font-size: 20px;
  color: white;
  padding: 10px;
`;

export const UL = styled.ul`
  display: block;
  padding: 20px;
`;
