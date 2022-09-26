import type { NextPage } from "next";
import { Col, Row } from "react-bootstrap";

import CardProject from "@/components/card-project";
import Layout from "@/components/dashboard-layout";
import { getAllProjects } from "@/store/slices/projectsSlice/projectsActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const MyProjects: NextPage = () => {
  const dispatch = useDispatch();
  const { myProjects } = useSelector((state) => state.projects);
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  useEffect(() => {
    console.log(myProjects);
  }, [myProjects]);

  return (
    <Layout title="My projects">
      <Row>
        <Col md={4}>
          <h6 className="mb-2 fw-lightbold">TODO</h6>
          {myProjects.Project.map((project) => (
            <CardProject status="todo" project={project} />
          ))}
        </Col>

        <Col md={4}>
          <h6 className="mb-2 fw-lightbold">ONGOING</h6>
        </Col>

        <Col md={4}>
          <h6 className="mb-2 fw-lightbold">COMPLETED</h6>
        </Col>
      </Row>
    </Layout>
  );
};

export default MyProjects;
