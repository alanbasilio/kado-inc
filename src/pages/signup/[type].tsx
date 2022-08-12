import type { NextPage } from "next";
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";
import { MdOutlineAlternateEmail } from "react-icons/md";

import Layout from "../../components/layout";

const ForgotPassword: NextPage = () => {
  return (
    <Layout>
      <Row className="justify-content-center">
        <Col md={5} className="bg-white rounded shadow p-2 text-center"></Col>
      </Row>
    </Layout>
  );
};

export default ForgotPassword;
