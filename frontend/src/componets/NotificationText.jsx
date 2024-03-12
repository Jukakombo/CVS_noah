import React from "react";
import { FaClock } from "react-icons/fa";
import { useSelector } from "react-redux";
import moment from "moment";
const NotificationText = () => {
  const notifications = useSelector((state) => state.registrations);
  return (
    <div className=" p-4 rounded-md">
      {notifications.slice(0).reverse().map((x) => (
        <div className="my-4 border bg-[#0d0c22] p-4 rounded-md" key={x._id}>
          <div className="flex items-center justify-between">
            <h1>
              <span className="text-blue-600 font-bold">{x.user_name} </span>
              has requested access for Certificate Varification
            </h1>
            <div className="flex items-center">
              <FaClock size={20} className="mr-4" />
              {moment(x.createdAt).fromNow()}
            </div>
          </div>
          <div className="border-t mt-4 rounded">
            <h1>Email:&nbsp;{x.user_email}</h1>
            <p>Message:&nbsp;{x.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationText;
