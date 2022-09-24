import { logout } from "@/store/slices/userSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState, type PropsWithChildren } from "react";
import {
  Breadcrumb,
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
  Overlay,
  Popover,
  Row,
} from "react-bootstrap";
import { AiOutlineBank } from "react-icons/ai";
import {
  MdAdd,
  MdBookmarkBorder,
  MdDashboard,
  MdDashboardCustomize,
  MdKeyboardArrowDown,
  MdLogout,
  MdOutlineMailOutline,
  MdOutlineNotifications,
  MdPerson,
  MdSearch,
  MdSettings,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export interface Props {
  breadcrumb?: string[];
  step?: number;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

const DashboardLayout: React.FC<PropsWithChildren<Props>> = ({
  breadcrumb,
  step,
  title,
  subtitle,
  children,
}) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!userInfo) {
      router.push("/");
    }
  }, [userInfo, router]);

  const logoutUser = () => {
    dispatch(logout());
  };

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
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

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return userInfo ? (
    <Container fluid className="overflow-hidden">
      <Row className="vh-100">
        <Col
          lg={2}
          md={3}
          sm={6}
          xs={12}
          className="px-4 py-3 bg-white d-none d-md-block"
        >
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
        <Col lg={10} md={9} sm={12} xs={12} className="bg-light">
          <Navbar bg="light" expand="lg" className="px-2">
            <Link href="/" passHref>
              <Navbar.Brand className="d-block d-md-none">
                <Image src="/images/logo.svg" width="96" height="26" alt="" />
              </Navbar.Brand>
            </Link>

            <Navbar.Toggle />
            <Navbar.Collapse>
              <div className="d-block d-md-none">
                {routes.map((route, index) => {
                  const isActive = router.pathname === route.url;
                  return (
                    !route.hidden && (
                      <Link key={index} href={route.url} passHref>
                        <Nav.Link
                          className={`my-2 p-0 ${
                            isActive ? "fw-bold" : "text-muted"
                          }`}
                        >
                          <span
                            className={`fs-4 ${isActive && "text-primary"}`}
                          >
                            {route.icon}
                          </span>{" "}
                          {route.title}
                        </Nav.Link>
                      </Link>
                    )
                  );
                })}
              </div>

              <Form className="w-50 d-none d-md-block">
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
                <Button
                  variant="primary"
                  className="me-1 ms-auto d-none d-md-block"
                >
                  <MdAdd /> Create Project
                </Button>
              </Link>
              <Nav.Link className="mx-1 fs-4 d-none d-md-block">
                <MdOutlineNotifications />
              </Nav.Link>
              <Nav.Link className="mx-1 fs-4 d-none d-md-block">
                <MdOutlineMailOutline />
              </Nav.Link>
              <Nav.Link
                className="mx-1  align-items-center d-none d-md-flex"
                ref={ref}
              >
                <Image
                  src={userInfo.image_url_google || userInfo.image}
                  className="rounded-circle"
                  alt={`${userInfo.first_name} ${userInfo.last_name}`}
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
                      <Link href="/profile" passHref>
                        <Nav.Link>
                          <MdPerson /> Profile
                        </Nav.Link>
                      </Link>
                      <Nav.Link onClick={logoutUser}>
                        <MdLogout /> Logout
                      </Nav.Link>
                    </Nav>
                  </Popover>
                </Overlay>
              </Nav.Link>
            </Navbar.Collapse>
          </Navbar>
          <Container className="p-2 overflow-scroll dashboard">
            {breadcrumb && step && (
              <Breadcrumb className="mb-2">
                {breadcrumb.map((item, index) => (
                  <Breadcrumb.Item key={index} active={step === index + 1}>
                    {item}
                  </Breadcrumb.Item>
                ))}
              </Breadcrumb>
            )}

            {title && (
              <h3 className={`fw-semibold ${!subtitle && "mb-4"}`}>{title}</h3>
            )}
            {subtitle && <p className="text-muted mb-4">{subtitle}</p>}
            {children}
          </Container>
        </Col>
      </Row>
    </Container>
  ) : null;
};

export default DashboardLayout;
