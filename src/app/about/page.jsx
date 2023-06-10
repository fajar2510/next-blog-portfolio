import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex mx-[7rem] gap-5 mt-8 mb-10">
      <div className="container mx-auto h-ful">
        <Image
          src="https://images.unsplash.com/photo-1513954789179-48f4fcd3ec7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt=""
          width={600}
          height={300}
          className="object-cover rounded-lg hover:-translate-y-3 transition duration-500 brightness-105 hover:brightness-125 ease-in-out"
        />
      </div>
      <div className="container flex mx-auto  gap-6">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold text-primary">About me</h2>
          <p className="first-letter:text-3xl first-letter:font-bold first-letter:pr-1.5 text-sm text-textLigh mt-1.5 text-justify leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolores
            et nobis? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Totam, necessitatibus?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            animi, eligendi delectus soluta ipsam magnam ducimus eum sit,
            consectetur inventore neque laudantium cupiditate vitae ullam! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Eveniet, odio!
          </p>
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold text-primary">I am doing</h2>
          <p className=" text-sm text-textLight mt-1.5 text-justify leading-relaxed mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            sunt laborum ipsam odit error voluptate?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            autem.
          </p>
          <div className="mt-5 mb-3 border-b border-slate-700" />
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
