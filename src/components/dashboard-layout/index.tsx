import { useState } from "react";
import { Col, Container, Row, Navbar, Nav, NavDropdown } from "react-bootstrap";

const MainLayout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container fluid>
      <Row className="vh-100">
        <Col lg={2} md={3} sm={6} xs={12} className="p-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            debitis dolorem quae quam cumque iusto necessitatibus nam omnis,
            incidunt quia saepe at quasi aliquam, eos corrupti quibusdam soluta
            illo mollitia.
          </p>
        </Col>
        <Col lg={10} md={9} sm={6} xs={12}>
          <Navbar bg="light" expand="lg" className="px-2">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <main className="p-2">{children}</main>
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
