import React from "react";
import { useSelector } from "react-redux";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaUser, FaVoicemail } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { MdFamilyRestroom } from "react-icons/md";
import { MdOutlineLocationCity } from "react-icons/md";
const StudentData = () => {
  const data = useSelector((state) => state.contacts);
  return (
    <div className="text-black">
      <div className="grid grid-cols-1 gap-4">
        {data.map((x) => (
          <div
            className="bg-blue-900 py-4 text-white px-4 rounded-md"
            key={x._id}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center  ">
                <FaUser size={30} />
                <h1 className="ml-2">
                  {x.firstName}&nbsp; {x.lastName}
                </h1>
              </div>
              <div className="flex items-center justify-between ">
                <div className="flex items-center">
                  <MdOutlineAlternateEmail size={30} />
                  <h1 className="ml-2">{x.email}s</h1>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" flex items-center my-2 py-2">
                <FaPhoneSquare size={30} />
                <h1 className="ml-2">{x.contact}</h1>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CgArrowsExpandUpRight size={30} />
                  <h1 className="ml-2">Sex: &nbsp;{x.sex}</h1>
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt size={30} />

                  <h1 className="ml-2">{x.dateOfBirth}</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MdFamilyRestroom size={30} />
                <h1 className="ml-2">{x.parentName}</h1>
              </div>
              <div className="flex items-center">
                <MdOutlineLocationCity size={30} />

                <h1 className="ml-2">{x.currentAddress}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentData;
