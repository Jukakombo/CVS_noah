import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  return (
    <div className="bg-[#FCF7F7]  ">
      <Navigation />
      <div className="flex items-center justify-center py-16 px-4">
        <form onSubmit={handleSubmit}>
          <>
            <div className="flex flex-col">
              <input
                type="email"
                name=""
                placeholder="Enter your Email ..."
                className=" w-full my-4 p-2 outline-none"
              />
            </div>
            <div className="">
              <input
                type="password"
                className=" w-full my-4 p-2 outline-none"
                name=""
                placeholder="Enter your Password ...   "
              />
            </div>
            <button className="btnPrimary w-full my-4 text-white">Login</button>
            <div>
              Don't have an account?{" "}
              <Link to="/register">
                <strong className="text-blue-700 cursor-pointer">
                  Create an Account
                </strong>
              </Link>
            </div>
          </>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
