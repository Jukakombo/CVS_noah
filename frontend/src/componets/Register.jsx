import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Register() {
  return (
    <div className="bg-[#FCF7F7]">
      <Navigation />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 w-7/12 m-auto  py-16">
        <div className="flex flex-col m-2">
          <input
            type="text"
            name=""
            placeholder="Enter First name ..."
            className=" w-full my-4 p-2 outline-none"
          />
        </div>
        <div className="flex flex-col m-2">
          <input
            type="text"
            name=""
            placeholder="Enter Last Name..."
            className=" w-full my-4 p-2 outline-none"
          />
        </div>
        <div className="m-2">
          <input
            type="password"
            className=" w-full my-4 p-2 outline-none"
            name=""
            placeholder="Enter your Password ...   "
          />
        </div>
        <div className="m-2">
          <input
            type="text"
            className=" w-full my-4 p-2 outline-none"
            name=""
            placeholder="confirm Password ...   "
          />
        </div>
        <div className="flex items-center mx-2">
          <input type="checkbox" />{" "}
          <p className="mx-2">I have agreed to the terms of conditions</p>
        </div>
        <button className="btnPrimary w-full my-4 text-white">
          Create Account
        </button>
        <div>
          <div>
            <Link to="/Login" className="p-2">
              Have an account?{" "}
              <strong className="text-blue-700 cursor-pointer">Login</strong>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
