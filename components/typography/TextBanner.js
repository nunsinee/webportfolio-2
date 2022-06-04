import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

export default function TextBanner({ children }) {
	return <Container className="hero__text">{children}</Container>;
}

TextBanner.propTypes = { children: PropTypes.node };
