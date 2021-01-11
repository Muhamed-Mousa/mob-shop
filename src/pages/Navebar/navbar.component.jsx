import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import { Link } from "react-router-dom";
import { NavWrapper } from "./navbar.styles";
import { VscSearch } from "react-icons/vsc";

const Navbars = () => {
  return (
    <NavWrapper dir="rtl">
      <Container>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="#home">vivo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <ul>
                <li>
                  <Nav.Link as={Link} className="home" to="/home">
                    الرئيسية
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={Link} className="product" to="/Product">
                    المنتجات
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
                  <Nav.Link as={Link} className="contact" to="/contact">
                    الدعم
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={Link} className="funtouch" to="/Funtouch">
                    Funtouch OS
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link as={Link} className="about" to="/about">
                    عن vivo
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link>
                    <VscSearch className="search-icon"></VscSearch>
                  </Nav.Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </NavWrapper>
  );
};
export default Navbars;

// import React from "react";
// import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

// import { Link } from "react-router-dom";
// import { NavWrapper } from "./navbar.styles";
// import { VscSearch } from "react-icons/vsc";

// const Navbars = () => {
//   return (
//     <NavWrapper>
//       <Container>
//         <Row>
//           <Col className="text-center">
//             <Navbar collapseOnSelect expand="lg" variant="dark" dir="rtl">
//               <Navbar.Brand href="https://www.vivo.com/eg/ar">
//                 vivo
//               </Navbar.Brand>

//               <Navbar.Toggle aria-controls="responsive-navbar-nav" />

//               <Navbar.Collapse id="responsive-navbar-nav">
//                 <Nav>
//                   <Nav.Link>
//                     <VscSearch className="search-icon"></VscSearch>
//                   </Nav.Link>

//                   <Nav.Link as={Link} className="about" to="/about">
//                     vivo عن
//                   </Nav.Link>

//                   <Nav.Link as={Link} className="funtouch" to="/Funtouch">
//                     Funtouch OS
//                   </Nav.Link>

//                   <Nav.Link as={Link} className="contact" to="/contact">
//                     الدعم
//                   </Nav.Link>

//                   <Nav.Link
//                     as={Link}
//                     className="shopping-places"
//                     to="/ShoppingPlaces"
//                   >
//                     منافذ البيع
//                   </Nav.Link>

//                   <Nav.Link as={Link} className="product" to="/Product">
//                     المنتجات
//                   </Nav.Link>

//                   <Nav.Link as={Link} className="home" to="/home">
//                     الرئيسية
//                   </Nav.Link>
//                 </Nav>
//               </Navbar.Collapse>
//             </Navbar>
//           </Col>
//         </Row>
//       </Container>
//     </NavWrapper>
//   );
// };