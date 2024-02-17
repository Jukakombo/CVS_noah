import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { deleteNews } from "../actions/news";

function ContactLists() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.news);

  return (
    <div className="admin_bg_sidbar p-4 mt-2 rounded">
      <div className="">
        <div className="admin_bg_sidbar text-center text-white">
          {contacts.length} &nbsp;
          {contacts.length > 0 ? "Contacts" : "Contact"}
        </div>
        {contacts.map((contact) => (
          <div className="py-2 admin_hover border-2 p-2" key={contact._id}>
            <div className=" flex justify-between  a p-2">
              <p className="   ">
                Sender Name:{contact.firstName} {contact.lastName}
              </p>
              <p className="  ">Time:{moment(contact.createdAt).fromNow()}</p>
            </div>
            <p className="my-2  p-2">Sender Email:{contact.email}</p>
            <p className="my-2  p-2">Sender Phone:{contact.phone}</p>

            <p className="my-2  p-2">Message body:{contact.message}</p>
            <button
              onClick={() => dispatch(deleteNews(contact._id))}
              className="text-center bg-red-500 text-white w-full py-2 rounded-md even:"
            >
              Delete Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactLists;
