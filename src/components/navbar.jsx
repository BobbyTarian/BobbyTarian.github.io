import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navbar() {
  return (
    <Navbar variant="dark" expand="sm" sticky="top" className="customNav ">
        <Navbar.Brand href="#Home">Bobby Tarian</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Music"><span className="linkText">Music</span></Nav.Link>
            <Nav.Link href="#Shows"><span className= "linkText">Shows</span> </Nav.Link>
            <Nav.Link href="#Bio"><span className="linkText">Bio</span></Nav.Link>
            <Nav.Link href="#Contact"><span className="linkText">Contact</span></Nav.Link>
            <Nav.Link href="#links"><span className="linkText">Links</span></Nav.Link>
            <Nav.Link href="#epk"><span className="linkText">EPK</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;