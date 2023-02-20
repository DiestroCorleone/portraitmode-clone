import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function NavBar(props) {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="index-back">
      <Container>
        <Navbar.Brand className="nav-img">
          <img
            src="img/portraitmode-logo-grey.png"
            width="200"
            height="auto"
            alt="PortraitClone Logo"
            title="PortraitClone - The space your photos deserve"
            className="pointer"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center nav-content">
            <Nav.Link>Feature</Nav.Link>
            <Nav.Link>Explore</Nav.Link>
            <Nav.Link>Artists</Nav.Link>
            <Nav.Link>Membership</Nav.Link>
            <Nav.Link>
              <Button variant="dark" className="hover-blue">
                Submit photo
              </Button>
            </Nav.Link>
            <Nav.Link>
              <i className="fa fa-fw fa-bell-o"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
