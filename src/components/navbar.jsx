import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" sticky="top" className="customNav ">
        <Navbar.Brand href="#home">Bobby Tarian</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Music">Music</Nav.Link>
            <Nav.Link href="#Bio">Bio</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;