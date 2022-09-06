import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Navbar,
  Nav,
  Form,
  Button,
  InputGroup,
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
} from "react-icons/md";

const DashboardLayout = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // storing input name
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    } else {
      router.push("/");
    }
  }, []);

  return (
    user && (
      <Container fluid className="bg-light">
        <Row className="vh-100">
          <Col lg={2} md={3} sm={6} xs={12} className="px-4 py-3 bg-white">
            <Image
              src={"/images/logo.svg"}
              alt={`KADO INC`}
              width={161}
              height={45}
            />
            <Nav defaultActiveKey="/home" className="flex-column mt-5">
              <Link href="/home" passHref>
                <Nav.Link className="mb-3 p-0">
                  <MdDashboard className="fs-4" /> Dashboard
                </Nav.Link>
              </Link>
              <Link href="/bookmarks" passHref>
                <Nav.Link className="mb-3 p-0">
                  <MdBookmarkBorder className="fs-4" /> Bookmarks
                </Nav.Link>
              </Link>
              <Link href="/my-projects" passHref>
                <Nav.Link className="mb-3 p-0">
                  <MdDashboardCustomize className="fs-4" /> My Projects
                </Nav.Link>
              </Link>
              <Link href="/payments" passHref>
                <Nav.Link className="mb-3 p-0">
                  <AiOutlineBank className="fs-4" /> Payments
                </Nav.Link>
              </Link>
              <Link href="/settings" passHref>
                <Nav.Link className="p-0">
                  <MdSettings className="fs-4" /> Settings
                </Nav.Link>
              </Link>
            </Nav>
          </Col>
          <Col lg={10} md={9} sm={6} xs={12}>
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
                <Nav.Link className="mx-1 d-flex align-items-center">
                  <Image
                    src={user.image_url_google || user.image}
                    className="rounded-circle"
                    alt={`${user.first_name} ${user.last_name}`}
                    width={40}
                    height={40}
                  />
                  <MdKeyboardArrowDown className="fs-4" />
                </Nav.Link>
              </Navbar.Collapse>
            </Navbar>
            <main className="p-2">{children}</main>
          </Col>
        </Row>
      </Container>
    )
  );
};

export default DashboardLayout;
