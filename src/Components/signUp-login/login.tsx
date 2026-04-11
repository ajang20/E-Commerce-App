// import React from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useUsers from "../users/userUsers";
import type { User } from "../users/userUsers";

type Validate = {
  userName?: string;
  email?: string;
  password?: string;
  all?: string;
};
export default function SignIn() {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Validate>({
    email: "",
    password: "",
    userName: "",
    all: "",
  });
  const navigate = useNavigate();
  const { users } = useUsers();

  function validate(email: string, password: string, userName: string) {
    const err: Validate = {};
    if (!email) err.email = "Please enter a valid email address.";

    if (!password || password.length <= 4)
      err.password = "Password must be at least 8 characters.";

    if (!userName.trim()) err.userName = "Please enter a valid user name.";

    return err;
  }

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userName = formData.get("userName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const errs = validate(email, password, userName);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    }

    setLoading(true);

    const matchedUser: User | undefined = users.find(
      (u) => u.email === email && u.password === password,
    );
    console.log("userfound:", users);
    if (!matchedUser) {
      setErrors((prev) => ({ ...prev, all: "Invalid email or password" }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, all: undefined }));
      navigate("/", { replace: true });
    }

    try {
      console.log("logging in", { userName, email, password });
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="bg-[#17181c] h-screen flex flex-col  ">
      <div className="flex gap-6 items-center mx-10 my-6">
        <div className="text-3xl font-bold text-[#b3c7ff]">Cyber</div>
      </div>

      <form
        onSubmit={handleLogin}
        className=" w-110 h-130 flex flex-col gap-8 items-center justify-center rounded-4xl bg-[#23262f] m-auto"
      >
        <div className="names flex gap-4 bg-[#17181c] p-0.5 rounded-4xl">
          <button
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
            id="userName"
            name="userName"
            type="text"
            placeholder="Enter username"
            className="w-80 border-0 outline-0"
            required
            onChange={() =>
              setErrors((prev) => ({ ...prev, userName: undefined }))
            }
          />
          {errors.userName && (
            <p className="text-red-400 text-xs mt-1">{errors.userName}</p>
          )}
        </div>
        <div className="email bg-[#17181c] text-white w-94  h-10 text-center rounded-lg flex justify-center items-center gap-2 ">
          <MdEmail />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="123@gmail.com"
            className="w-80 border-0 outline-0"
            required
            onChange={() =>
              setErrors((prev) => ({ ...prev, email: undefined }))
            }
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="password  bg-[#17181c] text-white w-94  h-10 text-center rounded-lg flex justify-center items-center gap-2">
          <RiLockPasswordFill />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            className="w-80 border-0 outline-0"
            required
            onChange={() =>
              setErrors((prev) => ({ ...prev, password: undefined }))
            }
          />
        </div>

        <div>
          {errors.password && (
            <p className="text-red-400 text-xs mt-1">{errors.password}</p>
          )}
          {errors.all && (
            <p className="text-red-400 text-xs mt-1">{errors.all}</p>
          )}
        </div>

        <button className="bg-[#b3c7ff] text-[#17181c]  h-10 w-38 text-center rounded-lg font-semibold">
          {loading ? "Logging" : " Login"}
        </button>
      </form>
    </div>
  );
}
