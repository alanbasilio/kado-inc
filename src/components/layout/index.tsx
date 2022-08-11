import type { NextPage } from "next";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import styles from "../../styles/Layout.module.scss";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div className={`${styles.layout} d-flex flex-column pt-10`}>
      <Head>
        <title>Kado Inc</title>
        <meta name="description" content="Kado Inc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>
              <Image
                src="/logo.svg"
                width="96"
                height="26"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Navbar.Text className="me-1">Have an account?</Navbar.Text>
            <Link href="/signin" passHref>
              <Button variant="outline-primary">Login</Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container as={"main"} className="flex-fill">
        {props.children}
      </Container>
      <Container
        fluid
        as={"footer"}
        className="d-flex flex-column justify-content-end align-items-center py-2"
      >
        <Container>
          <Row>
            <Col className="d-md-flex justify-content-between align-items-center">
              <p className="m-0">© 2021 Kado. All rights reserved.</p>
              <Nav>
                <Nav.Item>
                  <Link href="/" passHref>
                    <Nav.Link>Terms</Nav.Link>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/" passHref>
                    <Nav.Link>Privacy</Nav.Link>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/" passHref>
                    <Nav.Link>Security</Nav.Link>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/" passHref>
                    <Nav.Link>Get in touch</Nav.Link>
                  </Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Layout;
