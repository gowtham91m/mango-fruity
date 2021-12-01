import {
  NavbarContainer,
  MenuItem,
  Nav,
  LoginItem,
  NavLink,
} from "./Navbar.styles";
import { IconContext } from "react-icons";
import AdminLoginForm from "../../Pages/Admin/AdminLoginForm";
import Backdrop from "../../Pages/Admin/Backdrop";
import { useState } from "react";

const Navbar = () => {
  const [isShowLogin, setShowLogin] = useState(false);
  function AdminLogin() {
    setShowLogin((isShowLogin) => !isShowLogin);
  }
  function BackdropHide() {
    setShowLogin(false);
  }
  return (
    <div>
      <div>
        <IconContext.Provider value={{ color: "pink" }}>
          <Nav>
            <NavbarContainer>
              <MenuItem>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Photography">Photography</NavLink>
                <NavLink to="/Programming">Programming</NavLink>
                <NavLink to="/Drawings">Drawings</NavLink>
              </MenuItem>
              <LoginItem>
                <span onClick={AdminLogin}>admin login</span>
              </LoginItem>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </div>
      {isShowLogin && <AdminLoginForm />}
      {isShowLogin && <Backdrop onClick={BackdropHide} />}
    </div>
  );
};
export default Navbar;
