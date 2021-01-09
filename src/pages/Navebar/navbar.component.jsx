import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import { Link } from "react-router-dom";
import { NavWrapper } from "./navbar.styles";
import { VscSearch } from "react-icons/vsc";

const Navbars = () => {
  return (
    <NavWrapper>
      <Container>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link>
                <VscSearch className="search-icon"></VscSearch>
              </Nav.Link>
              <ul>
                <li>
                  <Nav.Link as={Link} className="about" to="/about">
                    vivo عن
                  </Nav.Link>
                </li>

                <li>
                  <Nav.Link as={Link} className="funtouch" to="/Funtouch">
                    Funtouch OS
                  </Nav.Link>
                </li>

                <li>
                  <Nav.Link as={Link} className="contact" to="/contact">
                    الدعم
                  </Nav.Link>
                </li>

                <li>
                  <Nav.Link
                    as={Link}
                    className="shopping-places"
                    to="/ShoppingPlaces"
                  >
                    منافذ البيع
                  </Nav.Link>
                </li>

                <li>
                  <Nav.Link as={Link} className="product" to="/Product">
                    المنتجات
                  </Nav.Link>
                </li>

                <li>
                  <Nav.Link as={Link} className="home" to="/home">
                    الرئيسية
                  </Nav.Link>
                </li>
                <li></li>
              </ul>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="https://www.vivo.com/eg/ar">vivo</Navbar.Brand>
        </Navbar>
      </Container>
    </NavWrapper>
  );
};

export default Navbars;
