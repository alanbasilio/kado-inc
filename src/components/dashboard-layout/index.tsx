import { logout } from "@/store/slices/userSlice";
import userImage from "@/utils/userImage";
import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState, type PropsWithChildren } from "react";

import { IsCompany, IsSchool, IsStudent } from "@/utils/profileType";
import {
  Badge,
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
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineChatAlt2, HiOutlineAcademicCap } from "react-icons/hi";
import {
  MdAdd,
  MdBookmarkBorder,
  MdDashboard,
  MdDashboardCustomize,
  MdKeyboardArrowDown,
  MdLogout,
  MdOutlineMailOutline,
  MdOutlineNotifications,
  MdOutlineSearch,
  MdOutlineSettings,
  MdSearch,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ModalContact from "@/components/modal-contact";
import { IoBriefcase } from "react-icons/io5";

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
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => {
    setShowModal(true);
  };

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
      show: true,
    },
    {
      url: "/projects",
      icon: <MdOutlineSearch />,
      title: IsSchool() ? "Projects" : "Find Jobs",
      show: IsSchool() || IsStudent(),
    },
    {
      url: "/departments",
      icon: <AiOutlineBank />,
      title: "Departments",
      show: IsSchool(),
    },
    {
      url: "/students",
      icon: <HiOutlineAcademicCap />,
      title: "Students",
      show: IsSchool(),
    },
    {
      url: "/partners",
      icon: <IoBriefcase />,
      title: "Business Partners",
      show: IsSchool(),
    },
    {
      url: "/bookmarks",
      icon: <MdBookmarkBorder />,
      title: "Bookmarks",
      show: !IsSchool(),
    },
    {
      url: "/my-projects",
      icon: <MdDashboardCustomize />,
      title: "My Projects",
      show: !IsSchool(),
    },
    {
      url: "/payments",
      icon: <AiOutlineBank />,
      title: "Payments",
      show: !IsSchool(),
    },
    {
      url: "/settings",
      icon: <MdOutlineSettings />,
      title: "Settings",
      show: true,
    },
  ];

  return userInfo ? (
    <Container fluid className="overflow-hidden">
      <Row className="vh-100">
        <Col
          lg={2}
          md={3}
          sm={6}
          xs={12}
          className="p-2 bg-white d-none d-md-block"
        >
          <Link href="/home" passHref>
            <a>
              <Image
                src={"/images/logo.svg"}
                alt={`KADO INC`}
                width={161}
                height={45}
                className="img-fluid"
              />

              {IsStudent() && (
                <Badge pill bg="secondary" className="mt-1">
                  Student
                </Badge>
              )}
              {IsSchool() && (
                <Badge pill bg="primary" className="mt-1">
                  School
                </Badge>
              )}
              {IsCompany() && (
                <Badge pill bg="danger" className="mt-1">
                  Company
                </Badge>
              )}
            </a>
          </Link>
          <Nav className="flex-column mt-12">
            {routes.map((route, index) => {
              const isActive = router.pathname === route.url;
              return (
                route.show && (
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
            <Navbar.Collapse>
              <div className="d-block d-md-none">
                {routes.map((route, index) => {
                  const isActive = router.pathname === route.url;
                  return (
                    route.show && (
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

              {!IsStudent() && (
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
              )}
              {IsCompany() && (
                <Link href="/projects/new" passHref>
                  <Button
                    variant="primary"
                    className="me-1 ms-auto d-none d-md-block"
                  >
                    <MdAdd /> Create Project
                  </Button>
                </Link>
              )}
              {IsSchool() && (
                <Link href="/proposal/new" passHref>
                  <Button
                    variant="primary"
                    className="me-1 ms-auto d-none d-md-block"
                  >
                    <MdAdd /> Create Proposal
                  </Button>
                </Link>
              )}
              <Nav.Link
                className={`mx-1 fs-4 d-none d-md-block ${
                  IsStudent() && "me-1 ms-auto"
                }`}
              >
                <MdOutlineNotifications />
              </Nav.Link>
              <Nav.Link className="mx-1 fs-4 d-none d-md-block">
                <MdOutlineMailOutline />
              </Nav.Link>
              <Nav.Link
                className="mx-1  align-items-center d-none d-md-flex"
                ref={ref}
                onClick={handleClick}
              >
                <Image
                  src={userImage()}
                  className="img-fluid border rounded-circle"
                  alt={`${userInfo?.first_name} ${userInfo?.last_name}`}
                  width={40}
                  height={40}
                />
                <MdKeyboardArrowDown
                  className={`fs-4 ${
                    router.pathname === "/home" && "text-primary"
                  }`}
                />
              </Nav.Link>
              <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref}
              >
                <Popover className="p-2" onClick={() => setShow(false)}>
                  <Nav className="flex-column">
                    <Link href="/profile" passHref>
                      <Nav.Link>
                        <FaRegEdit className="text-primary me-3" /> Edit Profile
                      </Nav.Link>
                    </Link>
                    <Link href="/settings" passHref>
                      <Nav.Link>
                        <MdOutlineSettings className="text-primary me-3" />{" "}
                        Account Settings
                      </Nav.Link>
                    </Link>

                    <Nav.Link onClick={handleShow}>
                      <HiOutlineChatAlt2 className="text-primary me-3" />{" "}
                      Contact Us
                    </Nav.Link>

                    <Nav.Link onClick={logoutUser}>
                      <MdLogout className="text-primary me-3" /> Signout
                    </Nav.Link>
                  </Nav>
                </Popover>
              </Overlay>
            </Navbar.Collapse>
          </Navbar>
          <Container className="overflow-scroll dashboard p-2">
            <Row>
              <Col>
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
                  <h3 className={`fw-semibold ${!subtitle && "mb-4"}`}>
                    {title}
                  </h3>
                )}
                {subtitle && <p className="text-muted mb-4">{subtitle}</p>}
              </Col>
            </Row>
            {children}
          </Container>
        </Col>
      </Row>
      <ModalContact show={showModal} handleClose={handleClose} />
    </Container>
  ) : null;
};

export default DashboardLayout;
