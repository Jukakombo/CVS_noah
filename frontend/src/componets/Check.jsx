import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { AiOutlineSearch } from "react-icons/ai";
import Certifcate from "./Certifcate";
function Check() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-[#FCF7F7]">
      <Navigation />
      <div className="w-11/12 m-auto  py-8">
        <div className="md:px-8">
          <h1 className="text-2xl font-bold text-[#d05ee2] py-8">
            Intructions
          </h1>
          <p className="text-xl">
            1. Enter the your ID No. in the search field.
          </p>
          <p className="text-xl">
            2. Click the "Search" button to initiate the search.
          </p>
          <p className="text-xl">
            3. The results of the search will be displayed on the page.
          </p>
        </div>
        <div className="py-8 md:px-16">
          <form onSubmit={handleSubmit} className="md:flex items-center">
            <input
              type="text"
              placeholder="Search by ID Number  "
              className="form__input  w-full p-4 outline-none"
            />
            <button
              type="submit"
              className="search__button md:w-32 px-4 text-white p-4 rounded bg-[#d05ee2] mx-4 flex items-center "
            >
              <AiOutlineSearch size={30} />
              Search
            </button>
          </form>
          <Certifcate />
          <Certifcate />
          <Certifcate />
          <Certifcate />
          <Certifcate />
          <Certifcate />
          <Certifcate />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Check;
