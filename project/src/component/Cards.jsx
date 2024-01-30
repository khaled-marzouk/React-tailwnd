import React from "react";

function Cards() {
	return (
		<div className="max-w-[1300px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
			{/* cards */}
			<div className=" rounded-xl relative">
				<div className=" absolute w-full h-full bg-black/50 rounded-xl text-white ">
					<p className=" font-bold text-2xl px-2 pt-4">
						Sun's Out , BOGO's Out
					</p>
					<p className=" px-2 ">Through 8/26</p>
					<button className=" border-white  bg-white text-black absolute bottom-4 mx-2">
						Order Now
					</button>
				</div>
				<img
					className="max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl"
					src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt=""
				/>
			</div>
			<div className=" rounded-xl relative">
				<div className=" absolute w-full h-full bg-black/50 rounded-xl text-white ">
					<p className=" font-bold text-2xl px-2 pt-4">
						Sun's Out , BOGO's Out
					</p>
					<p className=" px-2 ">Through 8/26</p>
					<button className=" border-white  bg-white text-black absolute bottom-4 mx-2">
						Order Now
					</button>
				</div>
				<img
					className="max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl"
					src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt=""
				/>
			</div>
			<div className=" rounded-xl relative">
				<div className=" absolute w-full h-full bg-black/50 rounded-xl text-white ">
					<p className=" font-bold text-2xl px-2 pt-4">
						Sun's Out , BOGO's Out
					</p>
					<p className=" px-2 ">Through 8/26</p>
					<button className=" border-white  bg-white text-black absolute bottom-4 mx-2">
						Order Now
					</button>
				</div>
				<img
					className="max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl"
					src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
					alt=""
				/>
			</div>
		</div>
	);
}

export default Cards;
