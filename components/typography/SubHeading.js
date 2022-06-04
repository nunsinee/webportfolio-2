import propTypes from "prop-types";

export default function SubHeading({ subtitle }) {
	return <h2>{subtitle}</h2>;
}

SubHeading.propTypes = { subtitle: propTypes.string };
