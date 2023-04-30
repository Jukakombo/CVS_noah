import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Certifcate from "./Certifcate";

function Certificates() {
  return (
    <div className=" ">
      <h1 className="font-bold text-center text-[#d05ee2] py-4">
        Search for Student Certifcate
      </h1>
      <div className="">
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
        <Certifcate />
        <Certifcate />
        <Certifcate />
        <Certifcate />
        <Certifcate />
        <Certifcate />
      </div>
    </div>
  );
}

export default Certificates;
