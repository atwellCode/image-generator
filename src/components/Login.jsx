import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Login = () => {
    const [state, setState] = useState('Login')
    const {setShowLogin} = useContext(AppContext)
    useEffect(() => {
        document.body.style.overflow = "hideen";
        return() =>{
            document.body.style.overflow = "unset";
        }
    },[])
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 z-10 backdrop-blur-md bg-black/30 flex justify-center items-center">
      <form className="relative bg-white p-10 rounded-xl text-slate-500">
        <h1 className="text-center text-2xl font-medium text-neutral-700">
          {state}
        </h1>
        <p className="text-center text-sm">
          Welcome Back! Please {state === 'Login' ? "login" :"sign up"} to Continue
        </p>

       {state !== "Login" && <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <img width={15} src={assets.user_icon} alt="" />
          <input
            className="outline-none text-sm "
            type="text"
            placeholder="Full Name"
            name=""
            id=""
          />
        </div>}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.email_icon} alt="" />
          <input
            className="outline-none text-sm "
            type="text"
            placeholder="Email"
            name=""
            id=""
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.lock_icon} alt="" />
          <input
            className="outline-none text-sm "
            type="password"
            placeholder="Password"
            name=""
            id=""
          />
        </div>
        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forget Password
        </p>
        <button className="bg-blue-600 text-white w-full py-2 rounded-full">
          {state ==='Login' ? "Login":"Create Account"}
        </button>
        {state === "Login" ? <p className="mt-5 text-center">
          Don't have account?{" "}
          <span onClick={() => setState('Sign Up')} className="text-blue-600 cursor-pointer">Sign Up</span>
        </p> :
        <p className="mt-5 text-center">
          Already have account?{" "}
          <span onClick={() => setState('Login')} className="text-blue-600 cursor-pointer">Login</span>
        </p>}
        <div onClick={() => setShowLogin(false)} className="absolute top-5 right-5 cursor-pointer rounded-full hover:text-white hover:bg-red-600 p-3 ">
          <img className="" src={assets.cross_icon} alt="" />
        </div>
      </form>
    </div>
  );
};

export default Login;
