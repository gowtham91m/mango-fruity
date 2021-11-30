import {
  NavbarContainer,
  MenuItem,
  Nav,
  LoginItem,
  NavLink,
  ErrorMsg,
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
      <IconContext.Provider value={{ color: "pink" }}>
        <Nav>
          <NavbarContainer>
            <MenuItem>
              <NavLink to="../../Pages/HomePage">Home</NavLink>
            </MenuItem>
            <LoginItem>
              <button onClick={AdminLogin}>admin login</button>
            </LoginItem>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
      {isShowLogin && <AdminLoginForm />}
      {isShowLogin && <Backdrop onClick={BackdropHide} />}
    </div>
  );
};
export default Navbar;
