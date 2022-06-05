import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import TextBanner from "../components/typography/TextBanner";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../components/typography/Heading";
import SubHeading from "../components/typography/SubHeading";
import Link from "next/link";

export default function Contact() {
	return (
		<Layout>
			<Head title="Contact me" />
			<Container>
				<TextBanner>
					<Row>
						<Col sm>
							<Heading title="Contact me" />
						</Col>
					</Row>
					<Row>
						<Col sm>
							<SubHeading
								subtitle="Give me an opportunity.
"
							/>
						</Col>
					</Row>
				</TextBanner>

				<Row>
					<Col xs={12} md={6} className="mb-5">
						<h6>Quick contact by e-mail:</h6>
						<h3>nunsinee@gmail.com</h3>
					</Col>
					<Col xs={12} md={6} className="mb-5">
						<h6>See more my works:</h6>
						<Link href="https://www.webbymim.com/index.html">
							<a>
								<h3>www.webbymim.com</h3>
							</a>
						</Link>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
}
