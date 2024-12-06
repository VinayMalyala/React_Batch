import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Services = () => {
	return (
		<div className="h-[84vh] p-8 bg-slate-900 text-white flex justify-center">
			<div>
				{/* cards */}
				<div className="flex gap-12">
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

                {/* services */}
				<div className="text-white w-1/2 h-3/5 rounded-md flex flex-col bg-slate-800 drop-shadow-2xl p-5 mt-6 mx-auto">
					<div className="flex justify-between">
						<h4>Popular</h4>
						<p className="text-gray-500">View all 350+ coins</p>
					</div>

					<div className="flex flex-col mt-6 gap-4">
						<div className="flex justify-between gap-12">
                            <h3>Bitcoin</h3>
                            <h3>BTC</h3>
                            <h4>$96,227.99</h4>
                            <h4 className="text-red-500">-1.58%</h4>
                        </div>

                        <div className="flex justify-between gap-12">
                            <h3>Ethereum</h3>
                            <h3>ETH</h3>
                            <h4>$3,325.11</h4>
                            <h4 className="text-red-500">-2.75%</h4>
                        </div>

                        <div className="flex justify-between gap-12">
                            <h3>BNB</h3>
                            <h3>BNB</h3>
                            <h4>$650.56</h4>
                            <h4 className="text-red-500">-0.46%</h4>
                        </div>

                        <div className="flex justify-between gap-12">
                            <h3>XRP</h3>
                            <h3>XRP</h3>
                            <h4>$1.36</h4>
                            <h4 className="text-red-500">-7.41%</h4>
                        </div>

                        <div className="flex justify-between gap-12">
                            <h3>Solana</h3>
                            <h3>SOL</h3>
                            <h4>$248.49</h4>
                            <h4 className="text-red-500">-2.82%</h4>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
