import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Quote.css";

export default function TheNavbar() {
  return (
    <div>
      <div>
        <Navbar className="Nav" variant="dark" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto  navbar-collapse justify-content-end">
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Quote"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Quote
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/DogApi"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      DogAPi
                    </Link>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
