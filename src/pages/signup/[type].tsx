import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import { MdOutlineAlternateEmail } from "react-icons/md";

import Layout from "../../components/layout";

const SignupType: NextPage = () => {
  return (
    <Layout>
      <Row className="justify-content-center">
        <Col md={6} className="bg-white rounded shadow p-2 text-center"></Col>
      </Row>
    </Layout>
  );
};

export default SignupType;
