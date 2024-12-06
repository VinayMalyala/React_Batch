import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="bg-slate-900 text-white flex items-center justify-between py-4 px-10 border-b-[1px] border-white">
			<Link to="/">
                <div className="flex gap-2">
                    <img className="w-6 rotate-45 text-violet-600" src="./logo.svg" alt="" />
                    <h1 className="text-xl font-medium font-signika">Solidraw</h1>
                </div>
            </Link>

            
			<div className="flex gap-16 px-28 font-signika text-lg">
				<NavLink to="/services" activeClassName="active">
					Our Services
				</NavLink>
				<NavLink to="/about" activeClassName="active">
					About
				</NavLink>
				<NavLink to="/price" activeClassName="active">
					Pricing
				</NavLink>
			</div>

            <div>
                <button className="font-medium border border-white rounded-md px-5 py-2 mr-4 hover:bg-white hover:text-black transition-all duration-500">Sign in</button>
                <button className="font-medium bg-white text-black border border-white rounded-md px-5 py-2 mr-4 hover:bg-transparent hover:text-white transition-all duration-500">Sign Up</button>
            </div>
		</div>
	);
};

export default Navbar;
