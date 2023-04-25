import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

function Admin() {
  const [open, setOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };
  const openSwitch = () => {
    setOpen((open) => !open);
    // closeLogin();
  };

  const closeLogin = () => {
    setOpen(false);
  };
  return (
    <div className="bg-[#FCF7F7]  ">
      <Navigation />
      <div className="flex items-center justify-center py-16 px-4">
        <form onSubmit={handleSubmit}>
          {closeLogin && (
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
              <button className="btnPrimary w-full my-4 text-white">
                Login
              </button>
              <div>
                Don't have an account?{" "}
                <div onClick={openSwitch}>
                  <strong className="text-blue-700 cursor-pointer">
                    Create an Account
                  </strong>
                </div>
              </div>
            </>
          )}

          {open && (
            <div className="grid sm:grid-cols-1 md:grid-cols-2">
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

              <div className="">
                <button className="btnPrimary w-full my-4 text-white">
                  Create Account
                </button>
              </div>
              <div>
                Have an account?{" "}
                <div onClick={openSwitch}>
                  <strong className="text-blue-700 cursor-pointer">
                    Login
                  </strong>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Admin;
