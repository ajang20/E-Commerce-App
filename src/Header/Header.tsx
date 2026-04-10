import React from "react";

import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { MdOutlineNightlight } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiLight } from "react-icons/ci";


function Header() {
  const inputRef = React.useRef<HTMLInputElement>(null)
  function focus(e:React.MouseEvent<HTMLButtonElement>){
    inputRef.current?.focus()
  }


  return (
    <header className="flex justify-around gap-6 bg-white py-2 px-6 h-20 ">
      <div className="flex gap-6 items-center">
        <div className="text-3xl font-bold text-black">Cyber</div>
        <div className=" flex items-center justify-center border h-10 w-85 rounded-md text-black px-2 bg-[#DFDFDF] hover:border-black border-[#DFDFDF]">
          <IoIosSearch/>
          <input ref={inputRef} type="text" placeholder='Search' className='text-white w-[80%] ml-1.5  border-0 outline-0'/>
          <button onClick={focus} type='button' className='text-[12px] px-1.5 border-[#23262f] border bg-[#23262f] rounded-sm text-white'>Ctrl k</button></div>
      </div>

      <nav className='flex gap-10 items-center '>
    <NavLink  to='/'>Home</NavLink>
    <NavLink to=''>About</NavLink>
    <NavLink to=''>Contact Us</NavLink>
      </nav>
      <div className='flex gap-4 justify-center items-center  p-1'>
         <div className='icons flex gap-5 text-2xl'>
         <CiHeart/>
         <CiShoppingCart/>
         <button type="button" className='flex justify-center items-center text-black gap-1'>
          <CiLight/>t
         </button>
         </div>
        <span className='border h-6 text-[#b3c7ff]'></span>
         <CiUser className="text-2xl"/>
      </div>
    </header >
  )
}
export default Header