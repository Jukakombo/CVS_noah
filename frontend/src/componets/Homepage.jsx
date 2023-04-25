import React from "react";
import home1 from "../assets/x.jpg";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div className="w-11/12 m-auto py-8">
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="">
          <h1 className="tex-3xl homepage__font">
            Welcome to our Certificate Management System! We are thrilled to
            have you here and are confident that our system will exceed your
            expectations
          </h1>
          <div className="py-4">
            <Link to={"/Check"}>
              <button className="btnPrimary text-white mr-4">
                Check Certificate
              </button>
            </Link>
            <Link to={"/Admin"}>
              <button className="btnPrimary text-white ">Admin Login</button>
            </Link>
          </div>
        </div>
        <div className="">
          <img src={home1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
