import Head from "../components/layout/Head";
import Image from "next/image";
import Layout from "../components/layout/Layout";
import TextBanner from "../components/typography/TextBanner";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import Heading from "../components/typography/Heading";
import SubHeading from "../components/typography/SubHeading";
import NunsineePic from "../public/assets/images/nunsinee-viken.jpg";
import Paragraph from "../components/layout/Paragraph";

export default function About() {
	return (
		<Layout>
			<Head title="About me" />
			<Container>
				<TextBanner>
					<Row>
						<Col sm>
							<Heading title="About me.." />
						</Col>
					</Row>
					<Row>
						<Col sm>
							<SubHeading subtitle="Hi, I am Nunsinee Viken and I currently studying front-end web development at NOROFF " />
						</Col>
					</Row>
				</TextBanner>
				<Row>
					<Col sm className="mb-5">
						<h3>Get to know me a little</h3>
					</Col>
				</Row>
				<Row className="profile-container">
					<Col xs={12} md={6}>
						<Card className="card__person">
							<Image src={NunsineePic} alt="profile picture" />
						</Card>
					</Col>
					<Col xs={12} md={6} className="mt-3">
						<Paragraph>
							Hi, I am Nunsinee Viken and I currently studying
							front-end web development at NOROFF and I am looking
							for an opportunity to start work as a front-end web
							developer. I have previously worked as IT
							support/computer support and I have some previous
							experiences in making websites with Dreamweaver,
							photoshop and Wordpress.
						</Paragraph>

						<Paragraph>
							I also have experience in updating news online, as
							well as designing web pages for statistics. After
							this I changed to work in the tourism industry in my
							native country. After moving to Norway in 2018, I
							decided to study in front-end development to improve
							my skills and knowledges as I would like to continue
							working with development of web sites.
						</Paragraph>
						<Paragraph>
							I am open-mind, multilingual, hardworking and find
							it easy to adopt to new environments, therefore I
							believe I would be an asset for those offering me
							the opportunity to grow with them. Please feel free
							to contact me to get to know me even more.
						</Paragraph>
					</Col>
				</Row>
				<SubHeading subtitle=" Skills & Level" className="mb-5" />
				<Paragraph>Intermediate level = I, Beginner = B</Paragraph>
				<Row>
					<Col xs={12} md={3} className="mb-5">
						<ListGroup as="ul">
							<ListGroup.Item as="li" active>
								Languages
							</ListGroup.Item>
							<ListGroup.Item as="li">I...Html5</ListGroup.Item>
							<ListGroup.Item as="li">I...Html5</ListGroup.Item>
							<ListGroup.Item as="li">I...CSS3</ListGroup.Item>
							<ListGroup.Item as="li">
								I...JavaScript
							</ListGroup.Item>
							<ListGroup.Item as="li">
								I...TypeScript
							</ListGroup.Item>
						</ListGroup>
					</Col>

					<Col xs={12} md={3} className="mb-5">
						<ListGroup as="ul">
							<ListGroup.Item as="li" active>
								Design
							</ListGroup.Item>
							<ListGroup.Item as="li">
								I...Adobe XD
							</ListGroup.Item>
							<ListGroup.Item as="li">
								I...Adobe PhotoShop
							</ListGroup.Item>
							<ListGroup.Item as="li">
								B...Adobe Illustrator
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col xs={12} md={3} className="mb-5">
						<ListGroup as="ul">
							<ListGroup.Item as="li" active>
								Frameworks, Platforms and Libraries
							</ListGroup.Item>
							<ListGroup.Item as="li">I...React</ListGroup.Item>
							<ListGroup.Item as="li">B...Next JS</ListGroup.Item>
							<ListGroup.Item as="li">
								I...Bootstrap
							</ListGroup.Item>
							<ListGroup.Item as="li">I...Node JS</ListGroup.Item>
							<ListGroup.Item as="li">I...SASS</ListGroup.Item>
							<ListGroup.Item as="li">I...NPM</ListGroup.Item>
							<ListGroup.Item as="li">I...Strapi</ListGroup.Item>
							<ListGroup.Item as="li">
								I...Styled-Components
							</ListGroup.Item>
						</ListGroup>
					</Col>

					<Col xs={12} md={3} className="mb-5">
						<ListGroup as="ul">
							<ListGroup.Item as="li" active>
								Hosting
							</ListGroup.Item>
							<ListGroup.Item as="li">I...Heroku</ListGroup.Item>
							<ListGroup.Item as="li">I...Netlify</ListGroup.Item>
							<ListGroup.Item as="li">I...Vercel</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
}
