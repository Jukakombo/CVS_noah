import React from "react";
import img from "../assets/addAvatar.png";
function CreateCertificate() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="">
        <h1 className="font-bold text-center text-[#d05ee2] py-4">
          Create Student Certificate
        </h1>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-1 sm:grid-cols-2">
              <div className="flex flex-col my-2 mx-2">
                {" "}
                <label htmlFor="firstName" className="text-gray-500 text-xl">
                  First Name
                </label>
                <input
                  className="outline-none p-2 bg-gray-200 rounded"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                />
              </div>
              <div className="flex flex-col my-2 mx-2">
                {" "}
                <label htmlFor="contact" className="text-gray-500 text-xl">
                  Last Name
                </label>
                <input
                  className="outline-none p-2 bg-gray-200 rounded"
                  id="contact"
                  type="text"
                  placeholder="Last Name "
                  name="contact"
                />
              </div>
              <div className="flex flex-col my-2 mx-2">
                {" "}
                <label htmlFor="dateOfBirth" className="text-gray-500 text-xl">
                  Date of Birth
                </label>
                <input
                  className="outline-none p-2 bg-gray-200 rounded"
                  id="dateOfBirth"
                  type="date"
                  placeholder="Last Name "
                  name="DateOfBirth"
                />
              </div>
              <div className="flex flex-col my-2 mx-2">
                {" "}
                <label htmlFor="lastName" className="text-gray-500 text-xl">
                  Contact
                </label>
                <input
                  className="outline-none p-2 bg-gray-200 rounded"
                  id="lastName"
                  type="text"
                  placeholder="Contact "
                  name="lastName"
                />
              </div>
              <div className="flex flex-col my-2 mx-2">
                {" "}
                <label htmlFor="sex" className="text-gray-500 text-xl">
                  Sex
                </label>
                <select
                  className="outline-none p-2 bg-gray-200 rounded"
                  id="sex"
                  type="text"
                  placeholder="Contact "
                  name="lastName"
                >
                  <option value="">Select...</option>
                  <option value="Male"> Male</option>
                  <option value="Female"> Female</option>
                  <option value="Other"> Other</option>
                </select>
              </div>
              <div className="flex flex-col my-2 mx-2">
                {" "}
                <label
                  htmlFor="courseCompleted"
                  className="text-gray-500 text-xl"
                >
                  Course Completed
                </label>
                <select
                  className="outline-none p-2 bg-gray-200 rounded"
                  id="courseCompleted"
                  type="text"
                  placeholder="Contact "
                  name="courseCompleted"
                >
                  <option value="">Select ...</option>
                  <option value="Computer Science">Computer Science </option>
                  <option value="Communication and Journalism">
                    Communication and Journalism{" "}
                  </option>
                  <option value="Information Technology">
                    Information Technology{" "}
                  </option>
                  <option value="Accounting & Finance">
                    Accounting & Finance{" "}
                  </option>
                  <option value="Literature">Literature </option>
                  <option value="Medecine">Medecine </option>
                  <option value="Peace & Humanity">Peace & Humanity </option>
                  <option value="Data Science">Data Science </option>
                </select>
              </div>
              {/* grade obtain */}
              <div className="flex flex-col my-2 mx-2">
                {" "}
                <label htmlFor="gradeObtain" className="text-gray-500 text-xl">
                  Grade Obtain
                </label>
                <input
                  className="outline-none p-2 bg-gray-200 rounded"
                  id="gradeObtain"
                  type="number"
                  placeholder="Grade Obtain "
                  name="gradeObtain"
                />
              </div>
              <div className="flex flex-col my-2 mx-2">
                {" "}
                <label htmlFor="startedYear" className="text-gray-500 text-xl">
                  Started Year
                </label>
                <input
                  className="outline-none p-2 bg-gray-200 rounded"
                  id="startedYear"
                  type="date"
                  placeholder="Year Started "
                  name="startedYear"
                />
              </div>
              <div className="flex flex-col my-2 mx-2">
                {" "}
                <label
                  htmlFor="completedYear"
                  className="text-gray-500 text-xl"
                >
                  Completed year
                </label>
                <input
                  className="outline-none p-2 bg-gray-200 rounded"
                  id="completedYear"
                  type="text"
                  placeholder="Completed year "
                  name="completedYear"
                />
              </div>{" "}
              <div className="flex flex-col my-2 mx-2">
                {" "}
                <label htmlFor="photo" className="text-gray-500 text-xl">
                  student's Profile Photo
                </label>
                <label htmlFor="photo" className="bg-gray-200 p-2 rounded">
                  <img className="w-[23px]" src={img} alt="image" />
                </label>
                <input
                  className="outline-none hidden "
                  id="photo"
                  type="file"
                  placeholder=""
                  name="profilePhoto"
                />
              </div>
            </div>
            <button className="btnPrimary text-white font-bold my-8   text-center w-[50%] m-auto ">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateCertificate;
