import React from "react";

import ali from "../assets/ali.png";

import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

function DeleteCertificate() {
  return (
    <div>
      <form>
        <div className="bg-gray-200 p-2 flex items-center ">
          <input
            type="text"
            className="flex flex-1 p-2 outline-none rounded"
            placeholder="Search student's certificate by id number or last name"
            onChange=""
          />
          <AiOutlineSearch className="ml-4 text-gray-700" size={30} />
        </div>
      </form>
      <div className=" w-full py-4 bg-pink-100 my-4 p-4 rounded">
        <div className="flex items-center grid sm:grid-cols-1 md:grid-cols-3 ">
          <div className="flex items-center">
            <img src={ali} className="w-[60px] rounded-[50%]" alt="name" />
            <div className="ml-4">
              <h1 className="font-bold ">Alison Magid Juma</h1>
              <span>Joined University on:12/12/2020 </span>
            </div>
          </div>
          <div>
            <h1># Id:jhdue8768Y8768T87G </h1>
            <h1>Graduated on:12/12/2025</h1>
          </div>
          <div>
            <h1>College: Software Engineering</h1>
            <h1>Grade Obtain: A</h1>
          </div>
          <Link
            to="/view-certificate"
            c
            className=" bg-red-600 text-white rounded mx-2 px-2 my-2 py-2"
          >
            <button>Delete Certificate</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeleteCertificate;
