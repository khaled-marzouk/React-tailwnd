import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	return (
		<div className="max-w-[1640px] flex  mx-auto justify-between items-center p-4">
			{/* left side */}
			<div className="flex items-center">
				<div>
					<AiOutlineMenu size={36} />
				</div>
				<h1>
					Best <span>Eats</span>
				</h1>
				<div>
					<p>delivry</p>
					<p>pick up </p>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
