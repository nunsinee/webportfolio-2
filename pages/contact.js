import { useRouter } from "next/router";
import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";

export default function Contact(props) {
	// the log here will happen in the browser consolde
	const router = useRouter(props);
	console.log(props);
	return (
		<Layout>
			<Head title="Contact" />
			<div className="container">
				<h1>Test Contact</h1>
			</div>
		</Layout>
	);
}
