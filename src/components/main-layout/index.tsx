import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import {
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/userSlice";
import styles from "./main-layout.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Layout: React.FC = (props) => {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutUser = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (userInfo) {
      router.push("/home");
    }
  }, [userInfo, router]);

  return !userInfo ? (
    <div
      className={`${
        !props.home && styles.defaultBG
      } d-flex flex-column pt-8 min-vh-100`}
    >
      <Head>
        <title>Kado Inc</title>
        <meta name="description" content="Kado Inc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar bg={props.home ? "white" : "light"} expand="lg" fixed="top">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>
              <Image
                src="/images/logo.svg"
                width="96"
                height="26"
                className="img-fluid"
                alt="logo"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {props.home && (
              <>
                <NavDropdown title="Services" className="ms-2 my-2 my-md-0">
                  <NavDropdown.Item href="#for-company">
                    For Company
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#for-school">
                    For School
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#for-student">
                    For Student
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#how-it-works" className="ms-2 my-2 my-md-0">
                  How it works
                </Nav.Link>
                <Nav.Link href="#about" className="ms-2 my-2 my-md-0">
                  About
                </Nav.Link>
              </>
            )}
            {userInfo ? (
              <>
                <Navbar.Text className="ms-2 my-2 my-md-0">|</Navbar.Text>
                <Navbar.Text className="ms-2 my-2 my-md-0">{`Welcome, ${userInfo?.first_name}`}</Navbar.Text>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => logoutUser()}
                  className="ms-2 my-2 my-md-0"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                {props.home && (
                  <>
                    <Link href="/signin" passHref>
                      <Nav.Link className="ms-2 my-2 my-md-0">Signin</Nav.Link>
                    </Link>
                    <Link href="/signup" passHref>
                      <Button size="sm" variant="primary" className="ms-2">
                        Signup
                      </Button>
                    </Link>
                  </>
                )}
                {props.signin && !props.home && (
                  <>
                    <Navbar.Text className="ms-2 my-2 my-md-0">
                      Have an account?
                    </Navbar.Text>
                    <Link href="/signin" passHref>
                      <Button
                        size="sm"
                        variant="primary"
                        className="ms-2 my-2 my-md-0"
                      >
                        Signin
                      </Button>
                    </Link>
                  </>
                )}
                {props.signup && !props.home && (
                  <>
                    <Navbar.Text className="ms-2 my-2 my-md-0">
                      New to Kado?
                    </Navbar.Text>
                    <Link href="/signup" passHref>
                      <Button
                        size="sm"
                        variant="primary"
                        className="ms-2 my-2 my-md-0"
                      >
                        Signup
                      </Button>
                    </Link>
                  </>
                )}
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
      {!props.home && (
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
      )}
    </div>
  ) : null;
};

export default Layout;
