import { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { deleteContact } from "../actions/contacts";
import SendEmail from "./SendEmail";
const SearchById = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const certyificates = useSelector((state) => state.contacts);
  const datab = certyificates;
  const handleInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSearch = () => {
    // Simulated database search, replace with your actual data fetching logic
    const user = searchUserInDatabase(searchKeyword);

    if (user) {
      setUserInfo(user);
    } else {
      setUserInfo(null);
    }
  };

  const searchUserInDatabase = (keyword) => {
    const database = datab;
  
    return database.find(
      (user) => user._id.toLowerCase() === keyword.toLowerCase()||user.customId.toLowerCase() === keyword.toLowerCase() 
    );
  };

  return (
    <div className=" flex flex-col justify-between h-screen  ">
      <Navigation />
      <div className="py-8 md:px-16 md:flex items-center w-11/12 m-auto ">
        <input
          type="text"
          value={searchKeyword}
          onChange={handleInputChange}
          placeholder="Search by ID Number or index Number..."
          className="form__input text-gray-600  w-full p-4 outline-none"
        />
        <button
          onClick={handleSearch}
          type="submit"
          className="search__button md:w-32 px-4 text-white p-4 rounded bg-[#3673fd] mx-4 flex items-center "
        >
          <AiOutlineSearch size={30} />
          Search
        </button>
        {/* user Information to be display on the screen */}
      </div>
      <div className="py-8 md:px-16  w-11/12 m-auto">
        <button
          className="w-full bg-[#3673fd] mb-2 text-white p-2 rounded-md"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open
            ? "Alread have Access? Check"
            : "Are you a Guest / NGOs? Request Acces"}
        </button>
        {open && <SendEmail />}
      </div>
      <div className="w-11/12 m-auto py-8 md:px-16">
        {userInfo ? (
          <div>
            <div className=" items-center grid sm:grid-cols-1 md:grid-cols-3 border-2 border-white pl-2">
              <div className="flex items-center">
                <img
                  src={userInfo?.profilePhoto}
                  className="w-[60px] rounded-[50%]"
                  alt="name"
                />
                <div className="ml-4">
                  <h1 className="font-bold ">{userInfo?.firstName}</h1>
                  <span>Joined University on:{userInfo?.startedYear} </span>
                </div>
              </div>
              <div>
                <h1># Id:{userInfo?._id} </h1>
                <h1>Graduated on:{userInfo?.completeYear}</h1>
              </div>
              <div>
                <h1>College: {userInfo?.courseCompleted}</h1>
                <h1>Grade Obtain: {userInfo?.gradeObtain}</h1>
              </div>
              {/* <div className=" bg-red-600 text-white rounded mx-2 px-2 my-2 py-2">
                <button onClick={() => dispatch(deleteContact(userInfo._id))}>
                  Delete Certificate
                </button>
              </div> */}
              <Link
                to={`/view-certificate/${userInfo._id}`}
                className=" bg-green-600 text-white rounded mx-2 px-2 my-2 py-2"
              >
                <button>View Certificate</button>
              </Link>
              <Link
                to={`/view-certificate/${userInfo._id}`}
                className=" bg-blue-600 text-white rounded mx-2 px-2 my-2 py-2"
              >
                <button>Download Certificate</button>
              </Link>
            </div>
          </div>
        ) : (
          searchKeyword && (
            <p className="text-red-600 font-bold text-xl">
              Invalid Id Number or User not found in the database.
            </p>
          )
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SearchById;
