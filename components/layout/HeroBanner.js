import PropTypes from "prop-types";

export default function HeroBanner(props) {
	return <div className="hero">{props.children}</div>;
}

HeroBanner.propTypes = {
	children: PropTypes.node,
};
