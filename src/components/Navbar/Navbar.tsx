import {
  NavbarContainer,
  MenuItem,
  Nav,
  LoginItem,
  NavLink,
} from "./Navbar.styles";
import { IconContext } from "react-icons";
import AdminLoginForm from "../../Pages/AdminLogin/AdminLoginForm";
import Backdrop from "../../Pages/AdminLogin/Backdrop";
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
              <button className="btn" onClick={AdminLogin}>
                admin login
              </button>
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
