import { Navbar,Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


export default function NavMenu(){
    return (<Navbar bg="primary" data-bs-theme="primary" expand="lg">
    <LinkContainer to="/" >
      <Navbar.Brand>Quiz Time</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to="/" >
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/aboutpage" >
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>)
}