import type { NextPage } from "next";
import { Col, Row } from "react-bootstrap";

import CardProject from "@/components/card-project";
import Layout from "@/components/dashboard-layout";
import { getMyProjects } from "@/store/slices/projectsSlice/projectsActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyProjects: NextPage = () => {
  const dispatch = useDispatch();
  const { myProjects } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getMyProjects());
  }, [dispatch]);

  return (
    <Layout title="My projects">
      <Row>
        <Col md={4}>
          <h6 className="mb-2 fw-lightbold">TODO</h6>
          {myProjects.length > 0 &&
            myProjects?.map((project, index) => (
              <CardProject key={index} status="todo" project={project} />
            ))}
        </Col>

        <Col md={4}>
          <h6 className="mb-2 fw-lightbold">ONGOING</h6>
          {/* {myProjects?.map(
            (project) =>
              project.ProjectStatus.id === 2 && (
                <CardProject status="todo" project={project} />
              )
          )} */}
        </Col>

        <Col md={4}>
          <h6 className="mb-2 fw-lightbold">COMPLETED</h6>
          {/* {myProjects?.map(
            (project) =>
              project.ProjectStatus.id === 3 && (
                <CardProject status="todo" project={project} />
              )
          )} */}
        </Col>
      </Row>
    </Layout>
  );
};

export default MyProjects;
