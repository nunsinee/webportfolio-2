import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card, Button } from "react-bootstrap";
import ProjectExam from "../../public/assets/project_img/project_exam_2.jpg";
import JSFramework from "../../public/assets/project_img/js_frameworsk_2.jpg";
import SemesterProject from "../../public/assets/project_img/semester_project_2.jpg";

export default function Works() {
	return (
		<>
			<Row>
				<Col>
					<hr />
				</Col>
			</Row>
			<Row className="mb-5 mt-5">
				<Col xs={12} md={6}>
					<Link href="https://nv-exam-project-2.netlify.app/hotel">
						<Card className="card__work">
							<Image src={ProjectExam} alt="The Project Exam" />
						</Card>
					</Link>
				</Col>
				<Col xs={12} md={6}>
					<Card className="card__desc">
						<Card.Body>
							<Card.Title>Project Exam 2</Card.Title>
							<Card.Text>
								A Hotel Booking made with React, React-Bootstrap
								and SASS. Holidaze website is A local tourism
								agency in Bergen for visitors who find hotels,
								B&Bs and guesthouses, and for the accommodation
								owners to receive enquiries.
							</Card.Text>
							<Link
								href="https://github.com/Noroff-FEU-Assignments/project-exam-2-nunsinee"
								className="link_space"
							>
								<Button variant="dark">Github</Button>
							</Link>
							<Link
								href="https://nv-exam-project-2.netlify.app/hotel"
								className="link_space"
							>
								<Button variant="warning">View site</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col>
					<hr />
				</Col>
			</Row>
			<Row className="mb-5 mt-5">
				<Col xs={12} md={6}>
					<Link href="https://nv-js-frameworks-2.netlify.app/">
						<Card className="card__work">
							<Image src={JSFramework} alt="The Project Exam" />
						</Card>
					</Link>
				</Col>
				<Col xs={12} md={6}>
					<Card className="card__desc">
						<Card.Body>
							<Card.Title>JS Framework 2</Card.Title>
							<Card.Text>
								JS FrameWork Course Assignment 2 is made with
								Reac , React-Bootstrap and SASS. Using Wordpress
								API. To do Login functionality using a Wordpress
								API with the JWT plugin. Using react-hook-form
								and up for Form validation. Website using data
								from WordPress API.
							</Card.Text>
							<Link href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-nunsinee">
								<Button variant="dark">Github</Button>
							</Link>
							<Link href="https://nv-js-frameworks-2.netlify.app/">
								<Button variant="warning">View site</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col>
					<hr />
				</Col>
			</Row>
			<Row className="mb-5 mt-5">
				<Col xs={12} md={6}>
					<Link href="https://nunsinee-sp2.netlify.app/">
						<Card className="card__work">
							<Image
								src={SemesterProject}
								alt="The Project Exam"
							/>
						</Card>
					</Link>
				</Col>
				<Col xs={12} md={6}>
					<Card className="card__desc">
						<Card.Body>
							<Card.Title>Semester Project 2</Card.Title>
							<Card.Text>
								Website consists of customer-facing and admin
								sections. Admin side, it able to add, edit,
								delete and update products. Website using data
								from Stapi API and has built own Strapi Api to
								apply with it.
							</Card.Text>
							<Link href="https://github.com/nunsinee/semester-project">
								<Button variant="dark">Github</Button>
							</Link>
							<Link href="https://nunsinee-sp2.netlify.app/">
								<Button variant="warning">View site</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
}
