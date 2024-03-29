import React, { useState } from "react";
import { data } from "./data/Data.js";

const Food = () => {
	const [food, setFood] = useState(data);
	const filterType = (category) => {
		setFood(
			data.filter((item) => {
				return item.category === category;
			})
		);
	};
	const filterPrice = (price) => {
		setFood(
			data.filter((item) => {
				return item.price === price;
			})
		);
	};
	console.log(data);
	return (
		<div className="max-w-[1300px] mx-auto px-4 py-12">
			<h1 className=" text-orange-600 font-bold text-4xl text-center">
				Top rated menu items
			</h1>
			{/* filter row */}
			<div className=" flex flex-col lg:flex-row justify-between">
				{/* filter type */}
				<div className="">
					<p className="font-bold text-gray-700">Filter type </p>
					<div className=" flex justify-between flex-wrap">
						<button
							onClick={() => setFood(data)}
							className=" border-orange-600   text-orange-600 hover:bg-orange-600 hover:text-white m-1"
						>
							All
						</button>
						<button
							onClick={() => filterType("burger")}
							className=" border-orange-600   text-orange-600 hover:bg-orange-600 hover:text-white m-1"
						>
							Burger
						</button>
						<button
							onClick={() => filterType("pizza")}
							className=" border-orange-600   text-orange-600 hover:bg-orange-600 hover:text-white m-1"
						>
							Pizza
						</button>
						<button
							onClick={() => filterType("salad")}
							className=" border-orange-600   text-orange-600 hover:bg-orange-600 hover:text-white m-1"
						>
							Salade
						</button>
						<button
							onClick={() => filterType("chicken")}
							className=" border-orange-600   text-orange-600 hover:bg-orange-600 hover:text-white m-1"
						>
							Chicken
						</button>
					</div>
				</div>
				{/* filter price */}
				<div>
					<p className="font-bold text-gray-700">Filter Price</p>
					<div className=" flex justify-between max-w-[390px] w-full flex-wrap">
						<button
							onClick={() => filterPrice("$")}
							className=" border-orange-600   text-orange-600 hover:bg-orange-600 hover:text-white m-1"
						>
							$
						</button>
						<button
							onClick={() => filterPrice("$$")}
							className=" border-orange-600   text-orange-600 hover:bg-orange-600 hover:text-white m-1"
						>
							$$
						</button>
						<button
							onClick={() => filterPrice("$$$")}
							className=" border-orange-600   text-orange-600 hover:bg-orange-600 hover:text-white m-1"
						>
							$$$
						</button>
						<button
							onClick={() => filterPrice("$$$$")}
							className=" border-orange-600   text-orange-600 hover:bg-orange-600 hover:text-white m-1"
						>
							$$$$
						</button>
					</div>
				</div>
			</div>
			{/* display foods  */}
			<div className=" grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
				{food.map((item, index) => (
					<div
						className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
						key={index}
					>
						<img
							className="w-full h-[200px] object-cover rounded-t-lg"
							src={item.image}
							alt={item.name}
						/>
						<div className=" flex justify-between px-2 py-4">
							<p className="font-bold">{item.name}</p>
							<p>
								<span className="bg-orange-500 text-white p-1 rounded-full">
									{item.price}
								</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Food;
