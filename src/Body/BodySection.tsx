// import React from 'react'
import iphoneImg from './images/Iphone Image.png'
import { FaArrowRight } from "react-icons/fa";
import type {ReactElement} from 'react'

type bodyChildren = {
  children:ReactElement
}
function Body({children}:bodyChildren) {
  return (
    <main className="h-screen ">
      
      {/* <div className="main flex justify-evenly  items-center  ">
        <div className='Texts & button  flex flex-col gap-10'>
          <div className='text-7xl text-white font-light'>Iphone 14 <span className='font-bold'>Pro</span></div>
          <div className='text-xl text-[#c1c3c8]'>Created to change everything for the better <br/> For everyone.</div>
          <button className='w-36 h-14 bg-[#211c24] border-2 border-white rounded-xl flex items-center justify-center gap-4 p-4 text-white'>Shop now <FaArrowRight/></button>
        </div>
        <div className="img pt-15">
          <img src={iphoneImg} alt="Iphone Image" />
        </div>
      </div> */}
      {children}
    </main>
  )
}

export default Body