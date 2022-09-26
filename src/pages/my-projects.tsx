import type { NextPage } from "next";
import { Col, Row } from "react-bootstrap";

import CardProject from "@/components/card-project";
import Layout from "@/components/dashboard-layout";
import { getMyProjects } from "@/store/slices/projectsSlice/projectsActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const MyProjects: NextPage = () => {
  const dispatch = useDispatch();
  const { myProjects } = useSelector((state) => state.projects);
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getMyProjects());
  }, [dispatch]);

  useEffect(() => {
    console.log(myProjects);
  }, [myProjects]);

  return (
    <Layout title="My projects">
      <Row>
        <Col md={4}>
          <h6 className="mb-2 fw-lightbold">TODO</h6>
          <CardProject status="todo" />
          <CardProject status="todo" />
        </Col>

        <Col md={4}>
          <h6 className="mb-2 fw-lightbold">ONGOING</h6>
          <CardProject status="ongoing" />
          <CardProject status="ongoing" />
          <CardProject status="ongoing" />
        </Col>

        <Col md={4}>
          <h6 className="mb-2 fw-lightbold">COMPLETED</h6>
          <CardProject status="completed" />
          <CardProject status="completed" />
          <CardProject status="completed" />
          <CardProject status="completed" />
        </Col>
      </Row>
    </Layout>
  );
};

export default MyProjects;
