import React from "react";
import "./index.css";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import avatar from "../../assets/image/avatar.jpeg";
// import { faDisplay } from "@fortawesome/free-solid-svg-icons";
import Handlebutton from "../LoginLogic/handlebutton";

const NavigationBar = () => {
  const locationNav = useLocation();
  const loggedin = Handlebutton();
  const { logout } = Handlebutton();

  let details = localStorage.getItem("userDetails");
  let user = JSON.parse(details);
  return (
    <div>
      <Navbar key="md" expand="md" className="navigator">
        <Container fluid>
          <Link to="/" className="brand-logo">
            <Navbar.Brand href="#" />
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbar-expand-md"
            placement="end"
            style={{ width: "50%" }}
          >
            <Offcanvas.Header closeButton>
              <Link to="/" className="offset-brand-logo">
                <p>BCR</p>
                <Navbar.Brand href="#" />
              </Link>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-5">
                <Link to="/services" className="navi-link">
                  <Nav.Link href="#services">
                    <p className="p-navi">Our Services</p>
                  </Nav.Link>
                </Link>
                <Link to="/products" className="navi-link">
                  <Nav.Link href="#products">
                    <p className="p-navi">Why Us</p>
                  </Nav.Link>
                </Link>
                <Link to="/testi" className="navi-link">
                  <Nav.Link href="#testi">
                    <p className="p-navi">Testimonial</p>
                  </Nav.Link>
                </Link>
                <Link to="/faq" className="navi-link">
                  <Nav.Link href="#faq">
                    <p className="p-navi">FAQ</p>
                  </Nav.Link>
                </Link>
                {loggedin && user ? (
                  <div className="showuser">
                    <img src={avatar} alt="user avatar" id="userava" />
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title={user.fullname}
                      menuVariant="dark"
                    >
                      <NavDropdown.Item>
                        <button id="logout" onClick={logout}>
                          Logout
                        </button>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                ) : (
                  <Link
                    to="/register"
                    className="navi-link"
                    hidden={
                      (locationNav.pathname === "/login" ||
                        locationNav.pathname === "/register") &&
                      "true"
                    }
                  >
                    <Nav.Link
                      href="#register"
                      style={{
                        backgroundColor: "#5CB85F",
                        color: "white",
                        fontWeight: "700",
                        width: "100px",
                        display: "flex",
                        justifyContent: "center",
                        borderRadius: "2px",
                      }}
                    >
                      Register
                    </Nav.Link>
                  </Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
