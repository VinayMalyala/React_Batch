import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Price = () => {
  return (
    <div className="h-[84vh] p-8 bg-slate-900">
      <div className="flex flex-col justify-center">
        <h2 className="bg-white text-center rounded-full px-5 py-3 inline-block mx-auto">Our Plans</h2>
        <h2 className="text-white text-center mt-5 font-bold text-2xl">Choose the plan that's right for you</h2>
      </div>

      <div className=" flex justify-center text-white">
        {/* cards */}
        <div className="flex gap-12 mt-12">

          <div className="p-4 w-48 h-64 rounded-md flex flex-col justify-between bg-slate-800 drop-shadow-2xl">
            <div className="flex flex-col justify-between">
              <h3 className=" font-bold text-2xl">Basic</h3>
              <p>Best for personal use</p>
            </div>

            <h4><span className="text-3xl font-bold">$10</span>/100 coins</h4>
            

            <button className="bg-white text-black rounded-md py-[6px] text-lg font-medium mb-2">Purchase</button>
          </div>

          <div className="p-4 w-48 h-64 rounded-md flex flex-col justify-between bg-slate-800 drop-shadow-2xl">
            <div className="flex flex-col justify-between">
              <h3 className=" font-bold text-2xl">Advanced</h3>
              <p>Best for business use</p>
            </div>

            <h4><span className="text-3xl font-bold">$20</span>/200 coins</h4>
            

            <button className="bg-white text-black rounded-md py-[6px] text-lg font-medium mb-2">Purchase</button>
          </div>

          <div className="p-4 w-48 h-64 rounded-md flex flex-col justify-between bg-slate-800 drop-shadow-2xl">
            <div className="flex flex-col justify-between">
              <h3 className=" font-bold text-2xl">Business</h3>
              <p>Best for enterprise use</p>
            </div>

            <h4><span className="text-3xl font-bold">$50</span>/500 coins</h4>
            

            <button className="bg-white text-black rounded-md py-[6px] text-lg font-medium mb-2">Purchase</button>
          </div>

          

        </div>
      </div>
    </div>
  );
};

export default Price;
