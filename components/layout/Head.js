import NextHead from "next/head";
import Script from "next/script";

export default function Head({ title = "" }) {
	return (
		<NextHead>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<title>
				{title}
				{title ? " | " : ""} Portfolio-2
			</title>
			<link rel="icon" href="/static/favicon.ico" />
			<Script
				src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
				integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
				crossorigin="anonymous"
			></Script>
			<Script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
				integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
				crossorigin="anonymous"
			></Script>
		</NextHead>
	);
}
