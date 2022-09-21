import type { NextPage } from "next";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

import Layout from "@/components/main-layout";

const MagicLink: NextPage = () => {
  return (
    <Layout signup>
      <Row className="justify-content-center">
        <Col md={5} className="bg-white rounded shadow p-2 text-center">
          <h2 className="mb-2">Check your inbox</h2>
          <p className="mb-2 text-muted">
            We have sent a magic link to <br />
            <span className="text-dark">bill.sanders@example.com</span>.
            <br /> The magic link expires shortly so please check your email.
          </p>
          <p className="text-muted">
            Not your email address?{" "}
            <Link href="/signin/forgot-password-01" passHref>
              <a className="text-dark">Go back</a>
            </Link>
          </p>
        </Col>
      </Row>
    </Layout>
  );
};

export default MagicLink;
