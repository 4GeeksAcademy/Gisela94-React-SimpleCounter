import React from "react";
import Counter from "./Counter";
import '@fortawesome/fontawesome-free/css/all.min.css'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
		<Counter />

		</div>
	);
};

export default Home;
