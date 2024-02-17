import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../actions/contacts";

function DeleteCertificate() {
  const dispatch = useDispatch();
  const certyificates = useSelector((state) => state.contacts);

  return (
    <div className=" w-full py-4 admin_bg_sidbar text-white my-4 p-4 rounded ">
      {certyificates.map((x) => (
        <div
          className="  items-center grid sm:grid-cols-1 md:grid-cols-3 border-2 border-white pl-2"
          key={x._id}
        >
          <div className="flex items-center">
            <img
              src={x?.profilePhoto}
              className="w-[60px] rounded-[50%]"
              alt="name"
            />
            <div className="ml-4">
              <h1 className="font-bold ">{x?.firstName}</h1>
              <span>Joined University on:{x?.startedYear} </span>
            </div>
          </div>
          <div>
            <h1># Id:{x?._id} </h1>
            <h1>Graduated on:{x?.completeYear}</h1>
          </div>
          <div>
            <h1>College: {x?.courseCompleted}</h1>
            <h1>Grade Obtain: {x?.gradeObtain}</h1>
          </div>
          <div className=" bg-red-600 text-white rounded mx-2 px-2 my-2 py-2">
            <button onClick={() => dispatch(deleteContact(x._id))}>
              Delete Certificate
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DeleteCertificate;
