import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 10 },
  });
  // handler error
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className=" flex mx-[7rem] mb-12">
      <div className="relative  ">
        <h2 className="text-3xl font-bold text-white my-5">{data.title}</h2>
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
          {data.body}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
