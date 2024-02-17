import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const initialState = {
  user_email: "",
  user_name: "",
  message: "",
};

const SendEmail = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { user_email, user_name, message } = formData;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xk2389z", "template_juk05w8", form.current, {
        publicKey: "aAoKP2sDiMAbPQQeb",
      })
      .then(
        () => {
          clear();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    setTimeout(() => {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 5000);
    }, 3000);
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const clear = () => {
    setFormData({
      user_name: "",
      user_email: "",
      message: "",
    });
  };

  return (
    <div className="">
      <section className="bg-gray-100 text-gray-800 rounded-md">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <h1 className="font-bold py-2">
                Regarding the certificate verification system,
              </h1>
              <p className="max-w-xl text-lg">
                We would like to formally request assistance in verifying
                certificates for [purpose]. As we prioritize the integrity and
                accuracy of our certification process, it's essential that we
                maintain complete independence from external influence.
              </p>
              <p className="max-w-xl text-lg">
                Similar to our standing as wholly owned and independent
                entities, separate from manufacturer and group control, we
                assure you that our verification procedures remain unbiased and
                solely focused on ensuring compliance and reliability.
              </p>
              <p className="max-w-xl text-lg">
                Rest assured, our recommendations will be based solely on what
                is deemed appropriate and necessary for the situation at hand.
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-[#3673fd]">
                  {" "}
                  0698487054{" "}
                </a>

                <address className="mt-2 not-italic">
                  University Road, Juba, South Sudan
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="user_name"
                    value={user_name}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="name">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
                    placeholder="Email Address"
                    type="email"
                    id="name"
                    name="user_email"
                    value={user_email}
                    onChange={onChange}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-2  border-gray-200 p-3 text-sm"
                    placeholder="Type request message ...."
                    rows="8"
                    id="message"
                    name="message"
                    value={message}
                    onChange={onChange}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-[#3673fd] px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Request
                  </button>
                </div>
                {open && (
                  <div className="bg-green-600 text-white italic p-4 rounded-sm">
                    <h1 className="font-bold text-center">🚀Request sent!</h1>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SendEmail;
