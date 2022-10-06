import type { NextPage } from "next";
import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";

import { useRouter } from "next/router";

import Layout from "@/components/dashboard-layout";

import {
  getProject,
  studentApply,
} from "@/store/slices/projectsSlice/projectsActions";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { IsStudent } from "@/utils/profileType";
import Image from "next/future/image";

const ProjectDetails: NextPage = () => {
  const { loading, projects, project } = useSelector((state) => state.projects);
  const { userInfo } = useSelector((state) => state.user);

  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const handleApply = (data) => {
    dispatch(studentApply({ user_id: userInfo?.id, project_id: project.id }));
  };

  useEffect(() => {
    dispatch(getProject({ id: id }));
  }, [dispatch, id]);

  return (
    project && (
      <Layout title={"Projects"}>
        <Row className="bg-white rounded p-2">
          {IsStudent() && (
            <Col md={12} className="text-end mb-2">
              <Button onClick={handleApply}>Apply</Button>
            </Col>
          )}

          <Col md={12}>
            <h3>{project.project_title_role}</h3>
            <hr />
            <p className="text-muted">
              {`Added by ${userInfo?.first_name} ${userInfo?.last_name}`}, 4
              hours ago
            </p>
            <Row className="mt-3 mb-3 d-flex align-items-center">
              <Col md={12}>
                <Row className="d-flex align-items-center">
                  <Col md={4}>
                    <p className="text-muted">START DATE</p>
                    <p className="text-muted">
                      {moment(project.start_date).format("DD/MM/YY")}
                    </p>
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
                    <p className="text-muted">
                      {moment(project.DUE_DATE).format("DD/MM/YY")}
                    </p>
                  </Col>
                </Row>
                <hr />
                <h4 className="my-3">Description</h4>

                <div
                  dangerouslySetInnerHTML={{
                    __html: project.project_description,
                  }}
                />

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
                      src="/images/applications/design.png"
                      width={40}
                      height={40}
                      alt=""
                    />
                    <Image
                      className="img-fluid border rounded-circle"
                      src="/images/applications/design.png"
                      width={40}
                      height={40}
                      alt=""
                    />
                    <Image
                      className="img-fluid border rounded-circle"
                      src="/images/applications/design.png"
                      width={40}
                      height={40}
                      alt=""
                    />
                    <Image
                      className="img-fluid border rounded-circle"
                      src="/images/applications/design.png"
                      width={40}
                      height={40}
                      alt=""
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
      </Layout>
    )
  );
};

export default ProjectDetails;
