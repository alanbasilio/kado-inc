import type { NextPage } from "next";
import Head from "next/head";
import { Button, Card, Col, Row } from "react-bootstrap";
import Image from "next/image";
import Layout from "../components/main-layout";

const Home: NextPage = () => {
	return (
		<Layout>
			<Row className="align-items-center">
				<Col md={6}>
					<h1>On-Demand Jobs for College Students.</h1>
					<p>
						On-demand marketplace connecting college students to projects,
						internships, and full-time roles with great companies.
					</p>

					<Row>
						<Col md={5}>
							<Button className="p-1" variant="primary" type="submit" size="sm">
								Hire Talent
							</Button>

							<Button
								className="offset-1 p-1"
								variant="primary"
								type="submit"
								size="sm"
							>
								Find Jobs
							</Button>
						</Col>
					</Row>
				</Col>
				<Col md={6}>
					<Image
						className="img-fluid"
						src="/images/sapiens.png"
						width="974"
						height="880"
						alt="React Bootstrap logo"
					/>
				</Col>
			</Row>
			<Row>
				<Col className="text-center mb-1" md={12}>
					<h1>The new way students get hired.</h1>
				</Col>
			</Row>
			<Row className="align-items-center background-wave">
				<Col md={4}>
					<Card className="p-2">
						<Card.Img
							className="rounded-circle"
							width={67}
							height={67}
							src="/images/companies.png"
						/>
						<h5 className="my-1">COMPANIES LOVE THE SPEED</h5>
						<p>
							Our algorithms make the smartest matches, but real-life human
							experts support each student and employer, making the best
							matches.
						</p>
						<a href="/#">LEARN MORE</a>
					</Card>
				</Col>
				<Col md={4}>
					<Card className="p-2">
						<Card.Img
							className="rounded-circle"
							width={67}
							height={67}
							src="/images/schools.png"
						/>
						<h5 className="my-1">SCHOOLS PREPARE THEIR STUDENTS</h5>
						<p>
							Launch and manage experiential learning projects using Kado's
							powerful marketplace and project management tools.
						</p>
						<a href="/#">LEARN MORE</a>
					</Card>
				</Col>
				<Col md={4}>
					<Card className="p-2">
						<Card.Img
							className="rounded-circle"
							width={67}
							height={67}
							src="/images/students.png"
						/>
						<h5 className="my-1">STUDENTS LOVE THIS MODEL</h5>
						<p>
							Complete Kado projects to gain hands-on experience, demonstrate
							employable skills and network with employers.
						</p>
						<a href="/#">LEARN MORE</a>
					</Card>
				</Col>
			</Row>
			<Row className="mt-5 align-items-center">
				<Col md={6}>
					<Image
						className="img-fluid"
						src="/images/student-card.png"
						width="1863"
						height="1495"
						alt="React Bootstrap logo"
					/>
				</Col>
				<Col md={6}>
					<h4>Earn Money and Gain Skills</h4>
					<p>
						Students use Kado to work on projects, get internships/entry-level
						roles. They are building skills and real-world experience while
						earning a degree.
					</p>
					<a href="/">Talk With Us &#x2794;</a>
				</Col>
			</Row>
			<Row className="mt-5 align-items-center">
				<Col md={6}>
					<h4>Earn Money and Gain Skills</h4>
					<p>
						Students use Kado to work on projects, get internships/entry-level
						roles. They are building skills and real-world experience while
						earning a degree.
					</p>
					<a href="/">Talk With Us &#x2794;</a>
				</Col>
				<Col md={6}>
					<Image
						className="img-fluid"
						src="/images/dashboard-example.png"
						width="997"
						height="759"
						alt="React Bootstrap logo"
					/>
				</Col>
			</Row>
			<Row className="mt-5 align-items-center">
				<Col md={6}>
					<Image
						className="img-fluid"
						src="/images/integrated-payment.png"
						width="1863"
						height="1495"
						alt="React Bootstrap logo"
					/>
				</Col>
				<Col md={6}>
					<h4>Integrated payment and 1099 filing.</h4>
					<p>
						Students use our platform to track their time and get paid. At the
						end of the year, we file 1099s with the IRS and mail the student a
						copy so you do not have to.
					</p>
					<a href="/">Talk With Us &#x2794;</a>
				</Col>
			</Row>
			<Row className="my-5">
				<Col className="text-center" md={12}>
					<h1>Get started with Kado</h1>
					<Button
						className="p-1 mt-3"
						variant="primary"
						type="submit"
						size="lg"
					>
						Register now
					</Button>
				</Col>
			</Row>
			<Row className="my-5">
				<Col>
					<Image
						className="img-fluid"
						src="/images/footer-logo.png"
						width="127"
						height="35"
						alt="React Bootstrap logo"
					/>
					<p>
						<span style={{ fontSize: "14px" }}>
							© 2020 Rocket Global.
							<br />
							All rights reserved.
						</span>
					</p>
				</Col>
				<Col className="offset-1">
					<h5>About</h5>
					<p>
						<a href="/">Our Story</a>
					</p>
					<p>
						<a href="/">Carreers</a>
					</p>
					<p>
						<a href="/">Contact us</a>
					</p>
				</Col>
				<Col>
					<h5>Services</h5>
					<p>
						<a href="/">For Students</a>
					</p>
					<p>
						<a href="/">For Companies</a>
					</p>
					<p>
						<a href="/">For Institutes</a>
					</p>
				</Col>
				<Col>
					<h5>Product</h5>
					<p>
						<a href="/">Discover Projects</a>
					</p>
					<p>
						<a href="/">Discover Students</a>
					</p>
					<p>
						<a href="/">FAQ</a>
					</p>
				</Col>
				<Col>
					<h5>Legal</h5>
					<p>
						<a href="/">Terms of Service</a>
					</p>
					<p>
						<a href="/">Privacy Policy</a>
					</p>
				</Col>
				<Col>
					<h5>Get Social</h5>
					<Row>
						<Col md={3}>
							<Image
								className="img-fluid"
								src="/images/footer-linkedin.png"
								width="24"
								height="26"
								alt="React Bootstrap logo"
							/>
						</Col>
						<Col md={3}>
							<Image
								className="img-fluid"
								src="/images/footer-facebook.png"
								width="24"
								height="26"
								alt="React Bootstrap logo"
							/>
						</Col>
						<Col md={3}>
							<Image
								className="img-fluid"
								src="/images/footer-instagram.png"
								width="24"
								height="26"
								alt="React Bootstrap logo"
							/>
						</Col>
						<Col md={3}>
							<Image
								className="img-fluid"
								src="/images/footer-twitter.png"
								width="24"
								height="26"
								alt="React Bootstrap logo"
							/>
						</Col>
					</Row>
				</Col>
			</Row>
		</Layout>
	);
};

export default Home;
