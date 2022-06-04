import { Nav, Container, Navbar, NavLink, Row, Col } from "react-bootstrap";
import Footer from "../layout/Footer";
import Wrapper from "../layout/Wrapper";
import HeroBanner from "../layout/HeroBanner";
import { useRouter } from "next/router";

import Link from "next/link";

export default function Layout({ children }) {
	const router = useRouter();

	return (
		<>
			<Wrapper>
				<HeroBanner>
					<Row>
						<Col>
							<Navbar expand="lg">
								<Container>
									<Navbar.Brand href="/">
										Portfolio-2
									</Navbar.Brand>
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
												Home
											</NavLink>

											<NavLink
												href="/about"
												className={
													router.pathname == "/about"
														? "active"
														: ""
												}
											>
												About
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
												Contact
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
