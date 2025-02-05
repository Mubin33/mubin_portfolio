import React from "react";
import { IoPerson } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { CiTextAlignLeft } from "react-icons/ci";

const ContactMe = () => {
  return (
    <div className="px-20">
      <h1 className="text-3xl text-center font-semibold">Contact me</h1>
      <div className="px-5 grid  gap-12 grid-cols-12 rounded-xl ">
        <div className="col-span-4 py-5 px-4 bg-red-900 bg-opacity-10">
          <h1 className="text-2xl text-white font-semibold">Get in Touch</h1>
          <p className="text-xs text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus!
          </p>
          <div className="relative mt-8">
            <div className="absolute  left-2 text-gray-500 top-2">
              <IoPerson size={17} />
            </div>
            <input
              className="px-3 w-full text-white border-[1px] border-red-500 py-1 rounded-md bg-gray-700 pl-7"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="relative mt-8">
            <div className="absolute  left-2 text-gray-500 top-2">
              <MdMarkEmailRead size={17} />
            </div>
            <input
              className="px-3 w-full text-white border-[1px] border-red-500 py-1 rounded-md bg-gray-700 pl-7"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <div className="relative mt-8">
            <div className="absolute left-2 text-gray-500 top-2">
              <CiTextAlignLeft size={17} />
            </div>
            <textarea
              className="px-3 w-full text-white min-h-24 max-h-24 border-[1px] border-red-500 py-1 rounded-md bg-gray-700 pl-7"
              placeholder="Email message with subject"
              aria-label="Email message with subject"
            />
          </div>
          <button className="btn bg-red-700 text-white w-full mt-3 border-none btn-sm">Send mail</button>
        </div>
        <div className="col-span-8  bg-red-900 bg-opacity-10 p-5">
          <div className="bg-white bg-opacity-20 p-5 rounded-2xl">
            <h1 className="text-xl font-semibold text-white">Comments</h1>
            <hr className="my-3"/>

            <div className=" mt-2">
             <span className="text-sm text-white">Name</span>
            <input
              className="px-3 w-full text-white border-[1px] border-red-500 py-1 rounded-md  bg-red-900 bg-opacity-10 pl-2"
              type="text"
              placeholder="Your name"
            />
          </div>

          <div className=" mt-2">
             <span className="text-sm text-white">Massage</span>
            <textarea
              className="px-3 w-full  min-h-24 max-h-24 text-white border-[1px] border-red-500 py-1 rounded-md  bg-red-900 bg-opacity-10 pl-2"
              placeholder="Type your massage here......" 
            />
          </div>
          <button className="btn bg-red-700 text-white w-full mt-3 border-none btn-sm">Send Massage</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
