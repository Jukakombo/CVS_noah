import React from "react";
import img from "../assets/addAvatar.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createContact, updateContact } from "../actions/contacts";
import FileBase from "react-file-base64";
import UpdateCertificate from "./UpdateCertificate";
import { useEffect } from "react";

function CreateCertificate() {
  const certyificates = useSelector((state) => state.contacts);
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    contact: "",
    gradeObtain: "",
    sex: "",
    courseCompleted: "",
    startedYear: "",
    completeYear: "",
    profilePhoto: "",
  });

  const updateMyCertificate = useSelector((state) =>
    currentId ? state.contacts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (updateMyCertificate) setFormData(updateMyCertificate);
  }, [updateMyCertificate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (currentId === 0) {
    //   dispatch(createContact(contact));
    //   clear();
    // } else {
    //   dispatch(updateContact(currentId, contact));
    //   clear();
    // }
    if (currentId) {
      dispatch(updateContact(currentId, formData));
      clear();
    } else {
      dispatch(createContact(formData));
      clear();
    }
  };

  const clear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      contact: "",
      gradeObtain: "",
      sex: "",
      courseCompleted: "",
      startedYear: "",
      completeYear: "",
      profilePhoto: "",
    });
    setCurrentId(0);
  };
  return (
    <div>
      <div className="">
        <h1 className="font-bold text-center text-[#3673fd] py-4">
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
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      firstName: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="flex flex-col my-2 mx-2">
                {" "}
                <label htmlFor="lastName" className="text-gray-500 text-xl">
                  Last Name
                </label>
                <input
                  className="outline-none p-2 bg-gray-200 rounded"
                  id="lastName"
                  type="text"
                  placeholder="Last Name "
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      lastName: e.target.value,
                    })
                  }
                  required
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
                  placeholder="Date of Birthday"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dateOfBirth: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="flex flex-col my-2 mx-2">
                {" "}
                <label htmlFor="contact" className="text-gray-500 text-xl">
                  Contact
                </label>
                <input
                  className="outline-none p-2 bg-gray-200 rounded"
                  id="contact"
                  type="text"
                  placeholder="Contact "
                  name="contact"
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contact: e.target.value,
                    })
                  }
                  required
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
                  placeholder="sex "
                  name="sex"
                  value={formData.sex}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sex: e.target.value,
                    })
                  }
                  required
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
                  placeholder="Course Completed "
                  name="courseCompleted"
                  value={formData.courseCompleted}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      courseCompleted: e.target.value,
                    })
                  }
                  required
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
                  type="gradeObtain"
                  placeholder="Grade Obtain "
                  name="gradeObtain"
                  value={formData.gradeObtain}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      gradeObtain: e.target.value,
                    })
                  }
                  required
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
                  value={formData.startedYear}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      startedYear: e.target.value,
                    })
                  }
                  required
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
                  name="completeYear"
                  value={formData.completeYear}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      completeYear: e.target.value,
                    })
                  }
                  required
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
                <FileBase
                  style={{ display: "none" }}
                  id="photo"
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setFormData({ ...formData, profilePhoto: base64 })
                  }
                />
              </div>
            </div>
            <button className="admin_btn p-4 rounded-md text-white font-bold my-8   text-center w-[50%] m-auto ">
              {currentId ? "Update Certificate" : " Create Certificate"}
            </button>
          </form>
          <UpdateCertificate
            setCurrentId={setCurrentId}
            certyificates={certyificates}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateCertificate;
