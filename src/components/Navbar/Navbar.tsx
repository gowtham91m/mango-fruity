import { NavbarContainer, MenuItem, Nav, LoginItem } from "./Navbar.styles";
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <div>
      <IconContext.Provider value={{ color: "pink" }}>
        <Nav>
          <NavbarContainer>
            <MenuItem>
              <label className="home">Home</label>
            </MenuItem>
            <LoginItem>admin login</LoginItem>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};
export default Navbar;
