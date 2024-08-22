import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CustomNavbar = styled(Navbar)`
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const CenteredNav = styled(Nav)`
  margin: 0 auto;
`;

function NavBar() {
  return (
    <CustomNavbar expand="sm">
      <Container>
        <CenteredNav>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Team">
              Team
            </Nav.Link>
            <Nav.Link as={Link} to="/Gallery">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/Faq">
              FAQ
            </Nav.Link>
          </Navbar.Collapse>
        </CenteredNav>
      </Container>
    </CustomNavbar>
  );
}

export default NavBar;
