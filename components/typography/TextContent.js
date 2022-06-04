import propTypes from "props-type";

export default function TextContent({ children }) {
	return <p>{children}</p>;
}

TextContent.PropTypes = { children: propTypes.string };
