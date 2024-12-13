import { Location01Icon, Mail01Icon, TelephoneIcon } from "hugeicons-react";
import React from "react";

const HomePageHeader = () => {
  return (
    <div className="mt-1 bg-slate-200 w-full flex justify-center h-auto py-5 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-xl font-bold text-gray-800">TutorConnect</h1>
          <p className="text-gray-600 text-sm">
            Better Education for better future{" "}
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex items-center mx-2 my-1">
            <TelephoneIcon className="text-gray-600" size={18} />
            <h2 className="ml-1 text-gray-700 text-sm">+91 1234567890</h2>
          </div>
          <div className="flex items-center mx-2 my-1">
            <Mail01Icon className="text-gray-600" size={18} />
            <h2 className="ml-1 text-gray-700 text-sm">rat@gmail.com</h2>
          </div>
        </div>
        <div className="flex items-center mx-2 my-1">
          <Location01Icon className="text-gray-600" size={18} />
          <h2 className="ml-1 text-gray-700 text-sm">
            Bhilai, Durg, Chattisgarh - 123456
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeader;
