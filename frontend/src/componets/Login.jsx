import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../actions/user";

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formData, navigate));
  };

  return (
    <div className=" text-white flex justify-between flex-col h-screen ">
      <Navigation />
      <div className="flex items-center justify-center py-16 px-4">
        <form onSubmit={handleSubmit} className="border-2 border-white p-8">
          <>
            <div className="flex flex-col ">
              <input
             
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                required
                placeholder="Enter your Email ..."
                className=" w-full my-4 p-2 outline-none text-gray-500"
              />
            </div>
            <div className="">
              <input
                type="password"
                className=" w-full my-4 p-2 outline-none text-gray-500"
                name="password"
                placeholder="Enter your Password ...   "
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                required
              />
            </div>
            <button type="submit" className="btnPrimary w-full my-4 text-white">
              Login
            </button>
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
