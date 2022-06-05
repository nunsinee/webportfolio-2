import { Nav, Container, Navbar, NavLink, Row, Col } from "react-bootstrap";
import Footer from "../layout/Footer";
import Wrapper from "../layout/Wrapper";
import HeroBanner from "../layout/HeroBanner";
import { useRouter } from "next/router";

export default function Layout({ children }) {
	const router = useRouter();

	return (
		<>
			<Wrapper>
				<HeroBanner>
					<Row>
						<Col className="navwrapp">
							<Navbar expand="lg" className="menu">
								<Container>
									<Navbar.Brand>Web Portfolio 2</Navbar.Brand>
									<Navbar.Toggle
										aria-controls="basic-navbar-nav"
										data-bs-toggle="collapse"
										aria-expanded="false"
										aria-label="Toggle navigation"
									/>
									<Navbar.Collapse id="basic-navbar-nav">
										<Nav className="ms-auto">
											<NavLink
												href="/"
												className={
													router.pathname == "/"
														? "active"
														: ""
												}
											>
												HOME
											</NavLink>

											<NavLink
												href="/about"
												className={
													router.pathname == "/about"
														? "active"
														: ""
												}
											>
												ABOUT
											</NavLink>

											<NavLink
												href="/contact"
												className={
													router.pathname ==
													"/contact"
														? "active"
														: ""
												}
											>
												CONTACT
											</NavLink>
										</Nav>
									</Navbar.Collapse>
								</Container>
							</Navbar>
						</Col>
					</Row>
				</HeroBanner>

				<Container>{children}</Container>
			</Wrapper>
			<Footer />
		</>
	);
}
