import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";
import GitHubIcon from "../../public/assets/icons/github-icons.svg";
import FaceBookIcon from "../../public/assets/icons/facebook-icons.svg";
import LinkedInIcon from "../../public/assets/icons/linkedin-icons.svg";
import TwitterIcon from "../../public/assets/icons/twitter-icons.svg";

export default function Footer({ children }) {
	return (
		<>
			<footer>
				<Container>
					<Row className="icons-container mt-3 mb-3">
						<Col xs={3} md={3} className="social-icons">
							<Link href="https://github.com/nunsinee">
								<a>
									<Image
										src={GitHubIcon}
										alt="Github"
										height="64"
										width="64"
									/>
								</a>
							</Link>
						</Col>
						<Col xs={3} md={3} className="social-icons">
							<Link href="https://www.facebook.com/Krabi-Islander-106733358584511">
								<a>
									<Image
										src={FaceBookIcon}
										alt="FaceBook Icon"
										className="icon-web"
										height="64"
										width="64"
									/>
								</a>
							</Link>
						</Col>
						<Col xs={3} md={3} className="social-icons">
							<Link href="https://www.linkedin.com/in/nunsinee/">
								<a>
									<Image
										src={LinkedInIcon}
										alt="LinkedIn Icon"
										className="icon-web"
										height="64"
										width="64"
									/>
								</a>
							</Link>
						</Col>
						<Col xs={3} md={3} className="social-icons">
							<Link href="https://twitter.com/MimInNorway">
								<a>
									<Image
										src={TwitterIcon}
										alt="Twitter Icon"
										height="64"
										width="64"
									/>
								</a>
							</Link>
						</Col>
					</Row>
					<Row>
						<Col sm className="mt-5">
							<h5>Nunsinee Viken</h5>
						</Col>
					</Row>
					<Row>
						<Col sm>
							Copyright 2022 Nunsinee Viken | All rights reserved.
						</Col>
					</Row>
				</Container>
			</footer>
		</>
	);
}

Footer.propTypes = {
	footer: PropTypes.node,
};
