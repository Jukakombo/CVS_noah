import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { signup } from "../actions/user";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function Register() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData, navigate));
  };
  return (
    <div className="bg-[#FCF7F7]">
      <Navigation />
      <form onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 w-7/12 m-auto  py-16">
          <div className="flex flex-col m-2">
            <input
              type="text"
              name="firstName"
              placeholder="Enter First name ..."
              className=" w-full my-4 p-2 outline-none"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  firstName: e.target.value,
                })
              }
              required
            />
          </div>
          <div className="flex flex-col m-2">
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name..."
              className=" w-full my-4 p-2 outline-none"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  lastName: e.target.value,
                })
              }
              required
            />
          </div>
          <div className="m-2">
            <input
              type="email"
              className=" w-full my-4 p-2 outline-none"
              name="email"
              placeholder="Enter your email ...   "
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              required
            />
          </div>
          <div className="m-2">
            <input
              type="password"
              className=" w-full my-4 p-2 outline-none"
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
          <div className="m-2">
            <input
              type="text"
              className=" w-full my-4 p-2 outline-none"
              name="confirmPassword"
              placeholder="confirm Password ...   "
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  confirmPassword: e.target.value,
                })
              }
              required
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
      </form>
      <Footer />
    </div>
  );
}

export default Register;
