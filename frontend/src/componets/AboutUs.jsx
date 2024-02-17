import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import about_us from "../assets/R.jpeg";
function AboutUs() {
  return (
    <div className="flex flex-col justify-between ">
      <Navigation />

      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16 ">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src={about_us}
                  className="absolute inset-0 h-full w-full object-cover rounded-md"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100  ">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl heading">
                  About us
                </h2>
                <p className="mt-4 text-gray-600">
                  We believe that managing certificates shouldn't be a burden,
                  which is why we've created a user-friendly platform to help
                  Professors save time and stay compliant.
                </p>{" "}
                <br />
                <p className="mt-4 text-gray-600">
                  The University of Juba (Arabic: جامعة جوبا) is an
                  English-language public university located in Juba, South
                  Sudan.[1] It was founded in 1975 under by the former Vice
                  president of and President of Southern Sudan, Abel Alier
                  Kwai.[2] The university was temporarily relocated to Khartoum
                  as a result of the Second Sudanese Civil War, and moved back
                  to Juba in July 2011, after South Sudan obtained
                  independence.[3][4] It is the best ranked university in South
                  Sudan.[5][6]
                </p>
                <br />
                <p className="mt-4 text-gray-600">
                  The incumbent Vice chancellor of the University of Juba (UoJ)
                  is Prof. John Akec.[7][8]
                </p>
                <a
                  href="/contact"
                  className="mt-8 inline-block rounded border border-[#3673fd] bg-[#3673fd] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-[#3673fd] focus:outline-none focus:ring active:text-indigo-500"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;
