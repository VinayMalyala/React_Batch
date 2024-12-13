import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="h-[84vh] p-8 bg-slate-900 flex">
        {/* left side */}
        <div className='w-1/2 p-10 h-full'>
          <h2 className='text-white uppercase font-bold text-7xl'>
            <span className='!text-violet-500'>242, 329, 405</span> <br />
            Users trust us
          </h2>

          <p className='mt-5 w-[80%] text-gray-500'>Users around the world believe in our digital payment system for the security we provide and the standards we maintain</p>

          <div className='flex gap-5'>
            <input className='bg-gray-500 border-none outline-none w-[320px] px-4 py-4 rounded-md mt-8' type="text" placeholder='Enter your email' />

            <button className='text-white bg-violet-500 flex items-center gap-3 rounded-md px-4 py-4 mt-8'>
              Sign Up <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>

        {/* right side */}
        <div  className='text-white w-1/2 h-3/5 rounded-md flex flex-col bg-slate-800 drop-shadow-2xl p-5 mt-6'>
          <div className='flex justify-between'>
            <h4>News</h4>
            <p className='text-gray-500'>View all news</p>
          </div>

          <div className='flex flex-col mt-12 gap-4'>
            <h4>Shiba Inu Team Issues Warning Against Fraudulent Actors</h4>
            <h4>Decentralized Science Mirrors Early DeFi Era, Says Mechanism Capital Partner</h4>
            <h4>UniSat Plans Update To Improve BRC20 Inscription Efficiency</h4>
            <h4>Bitcoin(BTC) Drops Below 96,000 USDT with a 2.48% Decrease in 24 Hours</h4>
            <h4>Key indices like Germany's DAX, France's CAC 40, and the UK's FTSE 100 have shown moderate gains, reflecting a positive momentum. </h4>
          </div>
        </div>
    </div>
  )
}

export default About