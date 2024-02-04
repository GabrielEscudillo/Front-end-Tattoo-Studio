import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logMeOut = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("decoded", JSON.stringify({}));
    setTimeout(() => {
      navigate("/personajes");
    });
  };

  return (
<Navbar style={{ backgroundColor: '#580707' }} variant="dark" expand="lg" className="text-light" id="navbar">
  <Container>
    <Navbar.Brand href="/">Tattooink</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="tatuadores">Artists</Nav.Link>
        <NavDropdown title="My account" id="basic-nav-dropdown">
          {!token ? (
            <>
              <NavDropdown.Item href="login">Login</NavDropdown.Item>
              <NavDropdown.Item href="register">Register</NavDropdown.Item>
            </>
          ) : (
            <>
              <NavDropdown.Item href="profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="">Appointments</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => logMeOut()}>Log out</NavDropdown.Item>
            </>
          )}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
};
