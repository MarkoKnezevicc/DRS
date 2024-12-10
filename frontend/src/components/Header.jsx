import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { logout, reset } from "../auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Navbar className="custom-navbar" expand="md">
        <Container>
          <Navbar.Brand className="navbar-text" as={Link} to="/">
            Portfolio Project
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {user ? (
                <>
                  <Nav.Link as={Link} className="navbar-text" to="/portfolio">
                    Portfolio
                  </Nav.Link>
                  <Nav.Link as={Link} className="navbar-text" to="/profile">
                    Profile
                  </Nav.Link>
                  <Nav.Link className="navbar-text" onClick={onLogout}>
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link className="navbar-text" as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link className="navbar-text" as={Link} to="/register">
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
