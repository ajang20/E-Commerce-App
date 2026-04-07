// import React from 'react'
import bannerImg from './images/bannerImg.webp'
import { FaArrowRight } from "react-icons/fa";

function Body() {
  return (
    <main className="h-screen bg-[#17181c]">
      <div className="main flex justify-center items-center px-32 pt-20 gap-16">
        <div className='Texts & button  flex flex-col gap-10'>
          <div className='text-7xl text-white font-bold'>Platzi Fake Store API</div>
          <div className='text-xl text-[#c1c3c8]'>The perfect API solution for your e-commerce or shopping <br/> website prototype.</div>
          <button className='w-36 h-14 bg-[#b3c7ff] rounded-4xl flex items-center justify-center gap-4 p-4'>View Docs <FaArrowRight/></button>
        </div>
        <div className="img">
          <img src={bannerImg} alt="Banner Image" />
        </div>
      </div>
    </main>
  )
}

export default Body