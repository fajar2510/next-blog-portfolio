import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogPost = ({ params }) => {
  return (
    <div className=" flex mx-[7rem] mb-12">
      <div className="relative  ">
        <h2 className="text-3xl font-bold text-white my-5">{params.id}</h2>
        <div className="flex gap-5 items-center justify-start mb-5">
          <div className=" rounded-full h-[1.5rem] w-[1.5rem] bg-[url('/spiderman.jpg')] bg-cover bg-center" />
          <h3 className="text-sm font-semibold text-textLight">
            {" "}
            Author name{" "}
          </h3>
        </div>

        <Image
          src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
          width={110}
          height={90}
          className="blog-image-detail float-left mr-3"
          alt="image blog"
        />

        <p className="first-letter:text-3xl first-letter:pr-1 first-letter:font-bold text-normal text-textLight font-normal text-justify leading-relaxed mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
          nunc at sapien imperdiet vulputate. Nulla in fringilla felis.
          Suspendisse quis maximus velit. Etiam lectus odio, vulputate non
          tortor non, ultricies tempor purus. Ut at eros blandit diam tempor
          auctor. Nullam sed turpis et nibh efficitur cursus. Mauris scelerisque
          pharetra orci sit amet eleifend. Maecenas id elit vitae enim varius
          egestas. Etiam aliquam egestas lacus, eu bibendum velit accumsan at.
          Nunc blandit eros nec quam pretium imperdiet. Sed scelerisque faucibus
          sagittis. Curabitur in orci nec diam venenatis sollicitudin feugiat
          feugiat odio.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
