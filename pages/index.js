import Head from "../components/layout/Head";
import TextBanner from "../components/typography/TextBanner";
import Layout from "../components/layout/Layout";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Heading from "../components/typography/Heading";
import SubHeading from "../components/typography/SubHeading";
import Works from "../components/layout/Works";

export default function Home(props) {
	return (
		<Layout>
			<Head title="Portfolio 2" />

			<TextBanner>
				<Row>
					<Col sm>
						<Heading title="Hi!, there.." />
					</Col>
				</Row>
				<Row>
					<Col sm>
						<SubHeading subtitle="I am looking for opportunity to grow and develop! " />
					</Col>
				</Row>
			</TextBanner>
			<Container>
				<Row>
					<Col sm className="mb-5">
						<SubHeading subtitle="Here are my 3 projects" />
					</Col>
				</Row>
				<Works />
			</Container>
		</Layout>
	);
}
