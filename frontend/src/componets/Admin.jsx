import { TbLogout } from "react-icons/tb";
import { GoDatabase } from "react-icons/go";
import { MdOutlineDelete } from "react-icons/md";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoIosCreate } from "react-icons/io";
import { TbFileCertificate } from "react-icons/tb";
import { MdOutlineNotificationsActive } from "react-icons/md";

import { IoMail, IoMailUnread } from "react-icons/io5";
import { useEffect } from "react";
function Admin({ setUser, user }) {
  const notifications = useSelector((state) => state.registrations);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;
    // jwt for manual
    setUser(JSON.parse(localStorage.getItem("profile")));
    // Assuming you have a proper way to check if the user is authenticated or not
    const isAuthenticated = user?.result?.name;
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      {/* <Navigation /> */}
      <div className="bg-[#0d0c22] py-24 h-full flex flex-col justify-between">
        <div className="flex justify-between w-11/12 m-auto items-between text-white">
          <h1 className="font-bold text-2xl">
            Hi <span className="text-[#3673fd]">{user?.result?.name}</span>,
            Welcome to Certificate Management system
          </h1>
          <div
            className="flex items-center rounded-md admin_btn p-2"
            onClick={() => dispatch(logout)}
          >
            <button className=" text-white rounded">Logout</button>
            &nbsp;
            <TbLogout className="cursor-pointer flex items-center" size={30} />
          </div>
        </div>
        <div className="flex  justify-between   w-11/12 m-auto py-8 ">
          <div className="sidebar admin_bg_sidbar border-2 border-white flex-[30%] flex-col justify-between p-4">
            {/* certificates */}
            <Link to="certificates">
              <div className="p-2 admin_hover bg-[#2d2b42] m-4 text-white rounded cursor-pointer flex items-center">
                <TbFileCertificate className="text-white mr-4" size={30} />
                Students Certificates
              </div>
            </Link>
            {/* studen data */}
            <Link to="student-data">
              <div className="functions">
                <div className="p-2 admin_hover bg-[#2d2b42] m-4   text-white rounded cursor-pointer flex items-center">
                  <GoDatabase size={30} className="mr-4" />
                  Students Data
                </div>
              </div>
            </Link>
            {/* studen data */}
            <Link to="notification">
              <div className="functions">
                <div className="p-2 admin_hover bg-[#2d2b42] m-4   text-white rounded cursor-pointer flex items-center">
                  <MdOutlineNotificationsActive size={30} className="mr-4'" />
                  Notifications &nbsp;
                  <span className="text-blue-600">
                    ({notifications?.length})
                  </span>
                </div>
              </div>
            </Link>
            {/* create certificate */}
            <Link to="create-certificate">
              <div className="functions">
                <div className="p-2 admin_hover bg-[#2d2b42] m-4   text-white rounded cursor-pointer flex items-center">
                  <IoIosCreate size={30} className="mr-4" />
                  Create Certificate
                </div>
              </div>
            </Link>

            {/* delete certificate */}
            <Link to="delete-certificate">
              <div className="functions">
                <div className="p-2 bg-red-700  m-4 text-white rounded cursor-pointer flex items-center admin_hover">
                  <MdOutlineDelete size={30} className="mr-4" />
                  Delete Certificate
                </div>
              </div>
              {/* inbox */}
              <Link to="contact-list">
                <div className="functions ">
                  <div className="p-2 admin_hover bg-[#2d2b42] m-4 text-white rounded cursor-pointer flex items-center">
                    <IoMailUnread size={30} className="mr-4" />
                    Contacts
                  </div>
                </div>
              </Link>
            </Link>
            {/* Send request to Noah*/}

            <Link to="send-request-noah">
              <div className="functions ">
                <div className="p-2 admin_hover bg-[#2d2b42] m-4 text-white rounded cursor-pointer flex items-center">
                  <IoMail size={30} className="mr-4" />
                  Notify Noah Dujé
                </div>
              </div>
            </Link>
            {/*logout  */}
            <div
              className="text-white functions cursor-pointer flex items-center  items-center rounded-md admin_btn p-4 mx-4 hover:bg-blue-600"
              onClick={() => dispatch(logout)}
            >
              <button className="rounded">Logout</button>
              &nbsp;
              <TbLogout className="" size={30} />
            </div>
          </div>

          <div className="main_bar px-4 bg-white flex-[70%]">
            <h1>You are now an Admin </h1>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
