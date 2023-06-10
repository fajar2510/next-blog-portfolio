import React from "react";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Contact = () => {
  return (
    <div className="flex items-center justify-between mx-[7rem] mt-8 mb-10">
      <div className="w-1/2">
        <Image
          src="/contact.png"
          alt="contact image"
          width={420}
          height={420}
          className="animate-pulse transition duration-1000 hover:-translate-y-3 ease-in-out"
        />
      </div>
      <div className="w-1/2 flex items-center justify-start">
        <div className="form-control w-4/5">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Type name here"
            className="input input-bordered "
          />
          <label className="label">
            <span className="label-text">What is your email?</span>
          </label>
          <input
            type="email"
            placeholder="Type email here"
            className="input input-bordered x"
          />
          <label className="label">
            <span className="label-text">Your message</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24 "
            placeholder="Type message here"
          ></textarea>
          <div className="mt-5 mb-3 border-b border-slate-700" />
          <Button url="/" text="Send to me" />
        </div>
      </div>
      
    </div>
    
  );
};

export default Contact;
