import React from "react";
import { IoPerson } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { CiTextAlignLeft } from "react-icons/ci";

const ContactMe = () => {
  return (
    <div className="lg:px-20 md:px-2 px-1 mt-56">
      <h1 className="text-4xl text-center font-bold my-8 bg-gradient-to-t from-white  via-red-700  to-red-950 text-transparent bg-clip-text">Your Experience and Feedback</h1>
      <div className="lg:px-5 md:px-2 px-1 md:grid  lg:gap-12 md:gap-3 grid-cols-12 rounded-xl ">
        <div className="col-span-4 py-5 px-4 bg-red-900 bg-opacity-10">
          <h1 className="text-2xl text-white font-semibold">Get in Touch</h1>
          <p className="text-xs text-gray-500">
            You can email me for any communication or comment anything here.
          </p>
          <div className="relative mt-8">
            <div className="absolute  left-2 text-gray-500 top-2">
              <IoPerson size={17} />
            </div>
            <input
              className="px-3 w-full text-white border-[1px] border-red-600 py-1 rounded-md bg-gray-700 pl-7"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="relative mt-8">
            <div className="absolute  left-2 text-gray-500 top-2">
              <MdMarkEmailRead size={17} />
            </div>
            <input
              className="px-3 w-full text-white border-[1px] border-red-600 py-1 rounded-md bg-gray-700 pl-7"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <div className="relative mt-8">
            <div className="absolute left-2 text-gray-500 top-2">
              <CiTextAlignLeft size={17} />
            </div>
            <textarea
              className="px-3 w-full text-white min-h-24 max-h-24 border-[1px] border-red-600 py-1 rounded-md bg-gray-700 pl-7"
              placeholder="Email message with subject"
              aria-label="Email message with subject"
            />
          </div>
          <button className="btn bg-red-600 text-white w-full mt-3 border-none btn-sm">Send mail</button>
        </div>
        <div className="col-span-8  bg-red-900 bg-opacity-10 p-5">
          <div className="bg-white bg-opacity-20 p-5 rounded-2xl">
            <h1 className="text-xl font-semibold text-white">Comments</h1>
            <hr className="my-3"/>

            <div className=" mt-2">
             <span className="text-sm text-white">Name</span>
            <input
              className="px-3 w-full text-white border-[1px] border-red-600 py-1 rounded-md  bg-red-900 bg-opacity-10 pl-2"
              type="text"
              placeholder="Your name"
            />
          </div>

          <div className=" mt-2">
             <span className="text-sm text-white">Massage</span>
            <textarea
              className="px-3 w-full  min-h-24 max-h-24 text-white border-[1px] border-red-600 py-1 rounded-md  bg-red-900 bg-opacity-10 pl-2"
              placeholder="Type your massage here......" 
            />
          </div>
          <button className="btn bg-red-600 text-white w-full mt-3 border-none btn-sm">Send Massage</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
