// import React from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import icon from './image.png'
import { Navigate } from "react-router-dom";

function SignIn() {
  function handleLogin(formData){
    const email = formData.get('email')
    const name = formData.get('userName')
    const password = formData.get("password")
    console.log(email,name,password)
  }
  return (
    <div className="bg-[#17181c] h-screen flex flex-col  ">
      <div className="flex gap-6 items-center mx-10 my-6">
        <img src={icon} alt="icon" className='w-12.5 h-12.5'/>
        <div className="text-3xl font-bold text-[#b3c7ff]">Platzi Fake Store API</div>
      </div>

      <form
        action="handleLogin"
        className=" w-110 h-130 flex flex-col gap-8 items-center justify-center rounded-4xl bg-[#23262f] m-auto"
      >
        <div className="names flex gap-4 bg-[#17181c] p-0.5 rounded-4xl">
          <button
          onClick={()=><Navigate to='signUp'/>}
            type="button"
            className="bg-[#17181c] text-white h-10 w-24 text-center rounded-4xl "
          >
            Sign Up
          </button>
          <button
            type="button"
            className="bg-[#23262f] text-white h-10 w-24 text-center rounded-4xl"
          >
           Login
          </button>
        </div>

        <div className="header text-3xl font-bold text-center text-white">
         Login
        </div>

        <div className="names bg-[#17181c] text-white w-94  h-10 text-center rounded-lg flex justify-center items-center gap-2 ">
          <FaRegUser />
          <input
            id ='userName'
            name ='userName'
            type="text"
            placeholder="Enter username"
            className="w-80 border-0 outline-0"
            required
          />
        </div>
        <div className="email bg-[#17181c] text-white w-94  h-10 text-center rounded-lg flex justify-center items-center gap-2 ">
          <MdEmail />
          <input
            id='email'
            name='email'
            type="email"
            placeholder="123@gmail.com"
            className="w-80 border-0 outline-0"
            required
          />
        </div>
        <div className="password  bg-[#17181c] text-white w-94  h-10 text-center rounded-lg flex justify-center items-center gap-2">
          <RiLockPasswordFill />
          <input
            id='password'
            name='password'
            type="password"
            placeholder="Enter password"
            className="w-80 border-0 outline-0"
            required
          />
        </div>

        <button
          className="bg-[#b3c7ff] text-[#17181c]  h-10 w-38 text-center rounded-lg font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default SignIn;
