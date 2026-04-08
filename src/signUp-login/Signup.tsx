// import React from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Navigate } from "react-router-dom";

function Signup() {
  return (
    <div className="bg-[#17181c] h-screen flex items-center justify-center ">
      <form
        action=""
        className=" w-110 h-130 flex flex-col gap-8 items-center justify-center rounded-4xl bg-[#23262f]"
      >
        <div className="names flex gap-4 bg-[#17181c] p-0.5 rounded-4xl">
          <button
            type="button"
            className="bg-[#23262f] text-white h-10 w-24 text-center rounded-4xl "
          >
            Sign Up
          </button>
          <button
          onClick={()=><Navigate to='singIn'/>}
            type="button"
            className="bg-[#17181c] text-white h-10 w-24 text-center rounded-4xl"
          >
            Login
          </button>
        </div>

        <div className="header text-3xl font-bold text-center text-white">
          Create an account
        </div>
        <div className="names flex gap-4">
          <input
            type="text"
            placeholder="First name"
            className="bg-[#17181c] text-white h-10 text-center rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Last name"
            className="bg-[#17181c] text-white  h-10 text-center rounded-lg"
            required
          />
        </div>
        <div className="email bg-[#17181c] text-white w-94  h-10 text-center rounded-lg flex justify-center items-center gap-2 ">
          <MdEmail />
          <input
            type="email"
            placeholder="123@gmail.com"
            className="w-80 border-0 outline-0"
            required
          />
        </div>
        <div className="password  bg-[#17181c] text-white w-94  h-10 text-center rounded-lg flex justify-center items-center gap-2">
          <RiLockPasswordFill />
          <input
            type="password"
            placeholder="Enter password"
            className="w-80 border-0 outline-0"
            required
          />
        </div>
        <div className="password  bg-[#17181c] text-white w-94  h-10 text-center rounded-lg flex justify-center items-center gap-2">
          <RiLockPasswordFill />
          <input
            type="password"
            placeholder="confirm password"
            className="w-80 border-0 outline-0"
            required
          />
        </div>
        <button
          type="button"
          className="bg-[#b3c7ff] text-[#17181c]  h-10 w-38 text-center rounded-lg font-semibold"
        >
          Create an account
        </button>
      </form>
    </div>
  );
}

export default Signup;
