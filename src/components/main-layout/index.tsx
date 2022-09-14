import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import styles from "./main-layout.module.scss";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import Head from "next/head";
import { useEffect, useState } from "react";

const Layout = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // storing input name
    if (localStorage.getItem("user_kado")) {
      setUser(JSON.parse(localStorage.getItem("user_kado")));
    } else {
      setUser(null);
    }
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user_kado");
    localStorage.removeItem("token_kado");
  };

  return (
    <div className={`${styles.layout} d-flex flex-column pt-8`}>
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
                src="/images/logo.svg"
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
            {user ? (
              <>
                <Navbar.Text className="me-1">
                  {`Welcome, ${user.first_name}`}
                </Navbar.Text>
                <Button variant="outline-primary" onClick={() => logout()}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Navbar.Text className="me-1">
                  {props.signin ? "New to Kado?" : "Have an account?"}
                </Navbar.Text>
                <Link href={props.signin ? "/signup" : "/signin"} passHref>
                  <Button variant="outline-primary">
                    {props.signin ? "Create an account" : "Log in"}
                  </Button>
                </Link>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container
        as={"main"}
        className="flex-fill d-flex flex-column justify-content-center py-3"
        fluid={props.fluid}
      >
        {props.children}
      </Container>
      <Container
        as={"footer"}
        className="d-flex flex-column justify-content-end align-items-center py-2"
      >
        <Container>
          <Row>
            <Col className="text-center d-md-flex justify-content-between align-items-center">
              <p className="m-0">© 2022 Kado. All rights reserved.</p>
              <Nav className="d-inline-flex">
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
