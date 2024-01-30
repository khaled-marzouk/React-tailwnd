import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Cards from "./component/Cards";
import Food from "./component/Food";
import Category from "./component/Category";
function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Cards />
			<Food />
			<Category />
		</div>
	);
}

export default App;
