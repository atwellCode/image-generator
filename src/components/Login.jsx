/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (state === "Login") {
        response = await axios.post(`${backendUrl}/api/users/login`, {
          email,
          password,
        });
      } else {
        response = await axios.post(`${backendUrl}/api/users/register`, {
          name,
          email,
          password,
        });
      }

      const data = response.data;

      // Check if request was successful
      if (data.success === true || data.success === "true") {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        setShowLogin(false);
        toast.success(data.message || `${state} Successful!`);
      }
      else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Login/Register Error:", error.message);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };


  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed top-0 right-0 left-0 bottom-0 z-10 backdrop-blur-md bg-black/30 flex justify-center items-center"
      >
        <motion.form
          onSubmit={onSubmitHandler}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className="relative bg-white p-10 rounded-xl text-slate-500 w-full max-w-sm"
        >
          <h1 className="text-center text-2xl font-medium text-neutral-700">{state}</h1>
          <p className="text-center text-sm mb-3">
            Welcome Back! Please {state === "Login" ? "login" : "sign up"} to continue
          </p>

          {state !== "Login" && (
            <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
              <img width={15} src={assets.user_icon} alt="" />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="outline-none text-sm w-full"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
          )}

          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
            <img src={assets.email_icon} alt="" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="outline-none text-sm w-full"
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
            <img src={assets.lock_icon} alt="" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="outline-none text-sm w-full"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <p className="text-sm text-blue-600 my-4 cursor-pointer hover:underline">
            Forget Password?
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-600 text-white w-full py-2 rounded-full"
          >
            {state === "Login" ? "Login" : "Create Account"}
          </motion.button>

          {state === "Login" ? (
            <p className="mt-5 text-center">
              Don't have an account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className="mt-5 text-center">
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
          )}

          <motion.div
            onClick={() => setShowLogin(false)}
            whileHover={{ rotate: 90, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-5 right-5 cursor-pointer rounded-full hover:text-white hover:bg-red-600 p-2 transition-all"
          >
            <img src={assets.cross_icon} alt="Close" />
          </motion.div>
        </motion.form>
      </motion.div>
    </AnimatePresence>
  );
};

export default Login;
