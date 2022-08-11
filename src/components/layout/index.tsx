import type { NextPage } from "next";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import styles from "../../styles/Layout.module.scss";
import Link from "next/link";

const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="/logo.svg"
              width="96"
              height="26"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Navbar.Text className="me-1">Have an account?</Navbar.Text>
            <Button variant="outline-primary">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container as={"main"} className={styles.main}>
        {props.children}
      </Container>
      <Container fluid as={"footer"} className={styles.footer}></Container>
    </div>
  );
};

export default Layout;
