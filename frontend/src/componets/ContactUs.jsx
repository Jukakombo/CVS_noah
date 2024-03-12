import React from "react";
import { useState } from "react";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
import { createNews } from "../actions/news";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};
function ContactUs() {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const [contacts, setContacts] = useState(initialState);
  const { firstName, lastName, email, subject, message, phone } = contacts;
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createNews(contacts));
    setTimeout(() => {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 3000);
    clear();
  };

  const handleChange = (e) => {
    setContacts({ ...contacts, [e.target.name]: e.target.value });
  };
  const clear = () => {
    setContacts({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };
  return (
    <>
      <Navigation />
      <div className="w-11/12 m-auto py-8 border-2 border-white">
        <h1 className="text-center font-bold text-xl my-4 heading">
          Contact Us
        </h1>
        <p className="text-center lg:text-lg">
          Please Fill in the form with the correct information
        </p>
        <form onSubmit={handleSubmit} className="">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 md:w-4/5 m-auto py-8 gap-8">
            <div className="flex  flex-col">
              <label htmlFor="userName" className="text-lg py-">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="userName"
                className="bg-gray-100 p-2 outline-none rounded"
                placeholder="Please enter your first name"
                onChange={handleChange}
                value={firstName}
                required
              />
            </div>
            <div className="flex  flex-col ">
              <label htmlFor="lastName" className="text-lg py-">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="bg-gray-100 p-2 outline-none rounded"
                placeholder="Please enter your first name"
                onChange={handleChange}
                value={lastName}
                required
              />
            </div>
            <div className="flex  flex-col">
              <label htmlFor="email" className="text-lg py-">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-100 p-2 outline-none rounded"
                placeholder="Please enter your  email"
                onChange={handleChange}
                value={email}
                required
              />
            </div>
            <div className="flex  flex-col ">
              <label htmlFor="phone" className="text-lg py-">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="bg-gray-100 p-2 outline-none rounded"
                placeholder="Please enter your phone"
                onChange={handleChange}
                value={phone}
                required
              />
            </div>
            <div className="flex  flex-col ">
              <label htmlFor="subject" className="text-lg py-">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="bg-gray-100 p-2 outline-none rounded"
                placeholder="Please enter your first name"
                onChange={handleChange}
                value={subject}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg py-">
                Message
              </label>
              <textarea
                id="message"
                className="bg-gray-100 p-2  text-gray-600 outline-none rounded"
                name="message"
                value={message}
                onChange={handleChange}
                placeholder="Type Message ..."
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          {success && (
            <div className="bg-green-400 p-4">
              <h1 className="text-2xl text-white text-center font-bold ">
                your message has successfully sent🎉
              </h1>
            </div>
          )}

          <div className="text-center mt-4">
            <button className="btnPrimary text-white font-bold p-2 rounded w-[200px]  ">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
