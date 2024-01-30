import React from "react";

const Hero = () => {
	return (
		<div className="max-w-[1300px] mx-auto p-4">
			<div className="max-h-[400px] relative ">
				{/* overlay */}
				<div className=" absolute w-full h-full text-gray-200 max-h-[400ox] bg-black/40 flex-col justify-center flex ">
					<h1 className="px-4 text-4xl sm:text-5xl md:text-6xl font-bold lg:text-7xl">
						The <span className="text-orange-500 ">Best</span>
					</h1>
					<h1 className="px-4 text-4xl sm:text-5xl md:text-6xl font-bold lg:text-7xl">
						<span className="text-orange-500 ">Foods</span> Deliverd
					</h1>
				</div>
				<img
					className="w-full max-h-[400px] object-cover"
					src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Hero;
