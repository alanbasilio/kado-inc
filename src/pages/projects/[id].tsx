import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

import Image from "next/image";
import { useRouter } from "next/router";
import swal from "sweetalert";

import Layout from "../../components/dashboard-layout";
import API from "../../services";

const ProjectDetails: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [project, setProject] = useState();

  const router = useRouter();
  const { id } = router.query;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const getProjectDetails = () => {
    setLoading(true);
    API.get(`/project/${id}/details`, {
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        setLoading(false);
        setProject(response.data.data[0]);
        console.log(response.data.data[0]);
      })
      .catch((err) => {
        setLoading(false);
        swal(
          "Error",
          err.response?.data?.message
            ? err.response?.data?.message
            : "An error occured: " + err,
          "error"
        );
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token_kado")) {
      setToken(JSON.parse(localStorage.getItem("token_kado")));
      setUser(JSON.parse(localStorage.getItem("user_kado")));
    } else {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    if (id && token) {
      getProjectDetails();
      console.log(id);
    }
  }, [id, token]);

  return (
    <Layout>
      {project && (
        <Row>
          <h2>Projects</h2>
          <h4 className="mb-2">Preview details of the project.</h4>

          <Col
            className="bg-white rounded shadow p-2"
            md={{
              span: 8,
              offset: 2,
            }}
          >
            <div className="mb-3">
              <Button variant="light" disabled={loading}>
                Mark complete
              </Button>
            </div>
            <hr />
            <h2 className="mt-3">{project.project_title_role}</h2>
            <p className="text-muted">
              {`Added by ${user.first_name} ${user.last_name}`}, 4 hours ago
            </p>
            <Row className="mt-3 mb-3 d-flex align-items-center">
              <Col md={12}>
                <Row className="d-flex align-items-center">
                  <Col md={4}>
                    <p className="text-muted">START DATE</p>
                    <p className="text-muted">{project.start_date}</p>
                  </Col>
                  <Col md={4}>
                    <p className="text-muted">Labels</p>

                    <Row className="mb-3">
                      <Col md={5}>
                        <div>
                          <Button
                            variant="primary"
                            size="sm"
                            disabled={loading}
                          >
                            Webdesign
                          </Button>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div>
                          <Button
                            className="ms-2"
                            variant="primary"
                            size="sm"
                            disabled={loading}
                          >
                            Unisense
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <p className="text-muted">DUE DATE</p>
                    <p className="text-muted">{project.due_date}</p>
                  </Col>
                </Row>
                <hr />
                <h4 className="mt-3">Description</h4>
                <p>{project.project_description}</p>
                <h5 className="text-muted">SHOW FULL DESCRIPTION</h5>

                <h4 className="mt-4">Attachment</h4>
                <Row className="bg-light py-2">
                  <Col md={3}></Col>
                  <Col md={4}>
                    <h4>Move_01.jpg</h4>
                    <p className="text-muted">384 KB</p>
                  </Col>
                </Row>

                <h4 className="mt-4">Timeline</h4>
                <Row>
                  <Col md={1}>
                    <p>40%</p>
                  </Col>
                  <Col md={11} className="d-flex align-items-center">
                    <div
                      style={{
                        background: "#ccc",
                        width: "50%",
                        height: "5px",
                      }}
                    ></div>
                    <div
                      style={{
                        background: "#e5e5e5",
                        width: "100%",
                        height: "5px",
                        zIndex: 1,
                      }}
                    ></div>
                  </Col>
                </Row>
                <h4 className="mt-4">Applications</h4>
                <Row className="mt-5">
                  <Col md={3}>
                    <Image
                      className="img-fluid border rounded-circle"
                      src="/images/design.png"
                      width="40"
                      height="40"
                      alt="React Bootstrap logo"
                    />
                    <Image
                      className="img-fluid border rounded-circle"
                      src="/images/design.png"
                      width="40"
                      height="40"
                      alt="React Bootstrap logo"
                    />
                    <Image
                      className="img-fluid border rounded-circle"
                      src="/images/design.png"
                      width="40"
                      height="40"
                      alt="React Bootstrap logo"
                    />
                    <Image
                      className="img-fluid border rounded-circle"
                      src="/images/design.png"
                      width="40"
                      height="40"
                      alt="React Bootstrap logo"
                    />
                  </Col>
                  <Col md={4}>
                    <div>
                      <Button variant="primary" size="sm" disabled={loading}>
                        View Applications
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Layout>
  );
};

export default ProjectDetails;
