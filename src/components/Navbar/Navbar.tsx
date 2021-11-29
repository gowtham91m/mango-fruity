import {
  NavbarContainer,
  MenuItem,
  Nav,
  LoginItem,
  NavLink,
} from "./Navbar.styles";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <IconContext.Provider value={{ color: "pink" }}>
        <Nav>
          <NavbarContainer>
            <MenuItem>
              <NavLink to="../../Pages/HomePage">Home</NavLink>
            </MenuItem>
            <LoginItem>
              <NavLink to="../../Pages/AdminLogin">AdminLogin</NavLink>
            </LoginItem>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};
export default Navbar;
