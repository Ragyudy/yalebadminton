import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Team">Team</Nav.Link>
            <Nav.Link href="/Gallery">Gallery</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Navbar.Collapse>
        </CenteredNav>
      </Container>
    </CustomNavbar>
  );
}

export default NavBar;
