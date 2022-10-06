import type { NextPage } from "next";
import { Col, Form, Row } from "react-bootstrap";
import Link from "next/link";

import Layout from "@/components/main-layout";
import Image from "next/future/image";

const EmailSent: NextPage = () => {
  return (
    <Layout signup>
      <Row className="justify-content-center">
        <Col md={5} className="bg-white rounded shadow p-2 text-center">
          <div className="mb-2">
            <Image
              width="150"
              height="135"
              src="/images/check-email.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <h2 className="mb-2">Check your e-mail</h2>
          <p className="mb-2 text-muted">
            We have sent an instruction on how to recover your password to your
            email.
          </p>

          <div className="d-grid gap-2 my-2">
            <Form.Text className="text-center">
              Did not receive any mail? Check your spam filter, or{" "}
              <Link href="/signin/forgot-password" passHref>
                <a className="primary">try another email address</a>
              </Link>
            </Form.Text>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default EmailSent;
