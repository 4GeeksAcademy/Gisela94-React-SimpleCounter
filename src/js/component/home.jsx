import React from "react";
import { Counter } from "./Counter.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css'


const Home = () => {
	let counter = 0;
	return (
		<div>
		<Counter seconds={counter} />

		</div>
	);
};

export default Home;
