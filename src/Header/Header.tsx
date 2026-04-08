import React from 'react'
import icon from './images/icon.png'
import { FaGithub} from "react-icons/fa";
import { MdOutlineNightlight } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";


function Header() {

  return (
    <header className="flex justify-between bg-[#23262f] py-2 px-6 ">
      <div className="flex gap-6 items-center">
        <img src={icon} alt="icon" className='w-12.5 h-12.5'/>
        <div className="text-3xl font-bold text-[#b3c7ff]">Platzi Fake Store API</div>
        <div className=" flex items-center justify-center border h-10 w-85 rounded-md text-[#b3c7ff] px-2 bg-[#17181c] hover:border-white border-[#23262c]"><IoIosSearch/><input type="text" placeholder='Search' className='text-white w-[80%] ml-1.5  border-0 outline-0'/><button type='button' className='text-[12px] px-1.5 border-[#23262f] border bg-[#23262f] rounded-sm text-white'>Ctrl k</button></div>
      </div>
      <div className='flex gap-4 justify-center items-center  p-1'>
        <div className="github"><FaGithub /></div>
        <span className='border h-6 text-[#b3c7ff]'></span>
        <button type="button" className='flex justify-center items-center text-white gap-1'><MdOutlineNightlight />
        <span className='font-bold '>Dark</span>
        <FaAngleDown/>
        </button>
      </div>
    </header >
  )
}
export default Header