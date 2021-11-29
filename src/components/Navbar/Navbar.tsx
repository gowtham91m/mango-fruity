import { NavbarContainer, MenuItem, Nav, LoginItem } from "./Navbar.styles";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <IconContext.Provider value={{ color: "pink" }}>
        <Nav>
          <NavbarContainer>
            <MenuItem>
              <Link to="../../Pages/HomePage">Home</Link>
            </MenuItem>
            <LoginItem>
              <Link to="../../Pages/AdminLogin">AdminLogin</Link>
            </LoginItem>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};
export default Navbar;
