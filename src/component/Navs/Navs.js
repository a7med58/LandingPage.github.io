import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navs.css";
const Navs = () => {
  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          {/*<img src={logo} alt="Logo" />*/}
          Eagle
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Client</Nav.Link>
            <Nav.Link href="#link">Certifications</Nav.Link>
            <Nav.Link href="#link">My Works</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Nav.Link href="#link">Review</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link id="lastnav">01123919198</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navs;
