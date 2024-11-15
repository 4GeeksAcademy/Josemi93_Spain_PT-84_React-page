import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import "../../styles/index.css";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Footer from "./Footer";

//create your first component


const card = [{
	image: { rigoImage },
	title: "Card title!",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nulla sunt at accusantium ducimus ea."
},
{
	image: { rigoImage },
	title: "Card title!",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nulla sunt at accusantium ducimus ea."
},
{
	image: { rigoImage },
	title: "Card title!",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nulla sunt at accusantium ducimus ea."
},
{
	image: { rigoImage },
	title: "Card title!",
	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nulla sunt at accusantium ducimus ea."
},
]
const Home = () => {
	return <div className="main-container">
		<Navbar />
		<Jumbotron />

		<div className="row">

			{card.map((value, index) => {
				return <Cards key={index} title={value.title} description={value.description} />
			})}</div>
		<Footer />
	</div>




};


export default Home;
