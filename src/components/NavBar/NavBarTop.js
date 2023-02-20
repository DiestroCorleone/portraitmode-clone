import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBarTop(props) {
  return (
    <Navbar bg="light" className="index-top hide-on-800">
      <Container>
        <Navbar.Brand className="nav-img">
          <strong>The space your photos deserve.</strong>
        </Navbar.Brand>
        <Nav className="me-auto align-items-center justify-content-end nav-content">
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Guidelines</Nav.Link>
          <Nav.Link>Blog</Nav.Link>
          <NavDropdown title="For brands" id="basic-nav-dropdown">
            <NavDropdown.Item>Advertise</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Sponsorship</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}
