import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import {
  Col,
  Container,
  Row,
  Navbar,
  Nav,
  Form,
  Button,
  InputGroup,
  Overlay,
  Popover,
  Breadcrumb,
} from "react-bootstrap";
import { AiOutlineBank } from "react-icons/ai";
import {
  MdSearch,
  MdAdd,
  MdOutlineNotifications,
  MdOutlineMailOutline,
  MdKeyboardArrowDown,
  MdDashboard,
  MdBookmarkBorder,
  MdDashboardCustomize,
  MdSettings,
  MdPerson,
  MdLogout,
} from "react-icons/md";

const DashboardLayout = (props) => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const router = useRouter();

  useEffect(() => {
    // storing input name
    if (localStorage.getItem("user_kado")) {
      setUser(JSON.parse(localStorage.getItem("user_kado")));
    } else {
      router.push("/");
    }
  }, [router]);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user_kado");
    localStorage.removeItem("token_kado");
    router.push("/");
  };

  const routes = [
    {
      url: "/home",
      icon: <MdDashboard />,
      title: "Dashboard",
      hidden: false,
    },
    {
      url: "/bookmarks",
      icon: <MdBookmarkBorder />,
      title: "Bookmarks",
      hidden: false,
    },
    {
      url: "/my-projects",
      icon: <MdDashboardCustomize />,
      title: "My Projects",
      hidden: false,
    },
    {
      url: "/payments",
      icon: <AiOutlineBank />,
      title: "Payments",
      hidden: false,
    },
    {
      url: "/settings",
      icon: <MdSettings />,
      title: "Settings",
      hidden: false,
    },
  ];

  return (
    user && (
      <Container fluid>
        <Row className="vh-100">
          <Col lg={2} md={3} sm={6} xs={12} className="px-4 py-3 bg-white">
            <Link href="/home" passHref>
              <a>
                <Image
                  src={"/images/logo.svg"}
                  alt={`KADO INC`}
                  width={161}
                  height={45}
                />
              </a>
            </Link>
            <Nav className="flex-column mt-12">
              {routes.map((route, index) => {
                const isActive = router.pathname === route.url;
                return (
                  !route.hidden && (
                    <Link key={index} href={route.url} passHref>
                      <Nav.Link
                        className={`mb-4 p-0 ${
                          isActive ? "fw-bold" : "text-muted"
                        }`}
                      >
                        <span className={`fs-4 ${isActive && "text-primary"}`}>
                          {route.icon}
                        </span>{" "}
                        {route.title}
                      </Nav.Link>
                    </Link>
                  )
                );
              })}
            </Nav>
          </Col>
          <Col lg={10} md={9} sm={6} xs={12} className="bg-light">
            <Navbar bg="light" expand="lg" className="px-2">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Form className="w-50">
                  <InputGroup>
                    <InputGroup.Text>
                      <MdSearch />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Search for students"
                      type="search"
                    />
                  </InputGroup>
                </Form>
                <Link href="/projects/new" passHref>
                  <Button variant="primary" className="me-1 ms-auto">
                    <MdAdd /> Create Project
                  </Button>
                </Link>
                <Nav.Link className="mx-1 fs-4">
                  <MdOutlineNotifications />
                </Nav.Link>
                <Nav.Link className="mx-1 fs-4">
                  <MdOutlineMailOutline />
                </Nav.Link>
                <Nav.Link className="mx-1 d-flex align-items-center" ref={ref}>
                  <Image
                    src={user.image_url_google || user.image}
                    className="rounded-circle"
                    alt={`${user.first_name} ${user.last_name}`}
                    width={40}
                    height={40}
                    onClick={handleClick}
                  />
                  <MdKeyboardArrowDown
                    className={`fs-4 ${
                      router.pathname === "/home" && "text-primary"
                    }`}
                  />
                  <Overlay
                    show={show}
                    target={target}
                    placement="bottom"
                    container={ref}
                  >
                    <Popover className="p-2">
                      <Nav className="flex-column">
                        <Nav.Link onClick={logout}>
                          <MdLogout /> Logout
                        </Nav.Link>
                      </Nav>
                    </Popover>
                  </Overlay>
                </Nav.Link>
              </Navbar.Collapse>
            </Navbar>
            <Container className="py-2">
              {props.breadcrumb && props.step && (
                <Breadcrumb className="mb-2">
                  {props.breadcrumb.map((item, index) => (
                    <Breadcrumb.Item
                      key={index}
                      active={props.step === index + 1}
                      onClick={() => props.setStep(index + 1)}
                    >
                      {item}
                    </Breadcrumb.Item>
                  ))}
                </Breadcrumb>
              )}

              {props.title && <h3 className="fw-semibold">{props.title}</h3>}
              {props.subtitle && (
                <p className="text-muted mb-4">{props.subtitle}</p>
              )}
              {props.children}
            </Container>
          </Col>
        </Row>
      </Container>
    )
  );
};

export default DashboardLayout;
