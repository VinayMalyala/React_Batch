import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
	return (
		<div className="bg-slate-900 text-white">
			<div className="h-[84vh] flex flex-col justify-center items-center">
				<div>
					<h2 className="text-[100px] font-signika font-bold leading-[1] text-center">
						Your Secure <br /> Gateway
					</h2>
				</div>

				<div className="flex items-center gap-5 justify-center mt-8">
					<button className="bg-violet-600 px-4 py-3 rounded-lg flex items-center gap-2">
						Request a demo <FaRegArrowAltCircleRight />
					</button>
					<p className="w-[50%] text-center">
						We prioritize your security and peace of mind. Our
						platform is designed to provide top-tier protection,
					</p>
				</div>

				{/* cards */}
				<div className="flex gap-12 mt-12">
					<div className="p-2 w-44 h-56 rounded-md flex flex-col justify-between bg-slate-800 drop-shadow-2xl">
						<div className="flex justify-between">
							<h5 className="text-lg">Bnb</h5>
							<FaArrowRight className="text-violet-500 -rotate-45" />
						</div>

						<div>
							<p className="text-md">BNB (BNB)</p>
							<p className="text-sm text-gray-400">13, 24585$</p>
						</div>
					</div>

					<div className="p-2 w-44 h-56 rounded-md flex flex-col justify-between bg-slate-800 drop-shadow-2xl">
						<div className="flex justify-between">
							<h5 className="text-lg">BTC</h5>
							<FaArrowRight className="text-violet-500 -rotate-45" />
						</div>

						<div>
							<p className="text-md">Bitcoin (BTC)</p>
							<p className="text-sm text-gray-400">13, 24585$</p>
						</div>
					</div>

					<div className="p-2 w-44 h-56 rounded-md flex flex-col justify-between bg-slate-800 drop-shadow-2xl">
						<div className="flex justify-between">
							<h5 className="text-lg">Eth</h5>
							<FaArrowRight className="text-violet-500 -rotate-45" />
						</div>

						<div>
							<p className="text-md">Ethereum (ETH)</p>
							<p className="text-sm text-gray-400">13, 24585$</p>
						</div>
					</div>

					<div className="p-2 w-44 h-56 rounded-md flex flex-col justify-between bg-slate-800 drop-shadow-2xl">
						<div className="flex justify-between">
							<h5 className="text-lg">Xrp</h5>
							<FaArrowRight className="text-violet-500 -rotate-45" />
						</div>

						<div>
							<p className="text-md">XRP</p>
							<p className="text-sm text-gray-400">13, 24585$</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
