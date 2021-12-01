import {
  NavbarContainer,
  MenuItem,
  Nav,
  LoginItem,
  NavLink,
  Manu,
  Mobileview,
  Sidenav,
  SidenavContainer,
  SideMenuItem,
  UL,
} from "./Navbar.styles";
import AdminLoginForm from "../../Pages/Admin/AdminLoginForm";
import Backdrop from "../../Pages/Admin/Backdrop";
import { useState } from "react";
import Hamburger from "./hamburger.svg";

const Navbar = () => {
  const [isShowLogin, setShowLogin] = useState(false);
  const [isSideNavOpen, setSideNavOpen] = useState(false);
  function AdminLogin() {
    setShowLogin((isShowLogin) => !isShowLogin);
  }
  function OnClickBackdrop() {
    setShowLogin(false);
    setSideNavOpen(false);
  }
  const handleClick = () => {
    window.open("https://main.d3mkz2k86h8v3e.amplifyapp.com/");
  };
  const openSideNav = () => {
    setSideNavOpen(true);
  };

  return (
    <div>
      <Mobileview>
        <img onClick={openSideNav} src={Hamburger} />
        {isSideNavOpen && (
          <Sidenav>
            <SidenavContainer>
              <UL>
                <NavLink onClick={OnClickBackdrop} to="/">
                  <SideMenuItem>home</SideMenuItem>
                </NavLink>
                <NavLink onClick={OnClickBackdrop} to="/Photography">
                  <SideMenuItem>Photography</SideMenuItem>
                </NavLink>
                <NavLink onClick={OnClickBackdrop} to="/Programming">
                  <SideMenuItem>Programming</SideMenuItem>
                </NavLink>
                <NavLink onClick={OnClickBackdrop} to="/Drawings">
                  <SideMenuItem>Drawings</SideMenuItem>
                </NavLink>
              </UL>
            </SidenavContainer>
          </Sidenav>
        )}
        {isSideNavOpen && <Backdrop onClick={OnClickBackdrop} />}
      </Mobileview>

      <Nav>
        <NavbarContainer>
          <MenuItem>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Photography">Photography</NavLink>
            <NavLink to="/Programming">Programming</NavLink>
            <NavLink to="/Drawings">Drawings</NavLink>
            <Manu onClick={handleClick}>Manushree</Manu>
          </MenuItem>
          <LoginItem>
            <span onClick={AdminLogin}>admin login</span>
          </LoginItem>
        </NavbarContainer>
      </Nav>

      {isShowLogin && <AdminLoginForm />}
      {isShowLogin && <Backdrop onClick={OnClickBackdrop} />}
    </div>
  );
};
export default Navbar;
