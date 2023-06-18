import React from "react";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 10 },
  });
  // handler error
  if (!res.ok) {
    throw new Error("Failed to fecth data");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className="flex flex-col mx-[7rem] gap-5 mt-6 ">
      <h1 className="font-bold text-5xl pb-6  ">My Blog</h1>

      {data.map((item) => (
        <Link
          key={item.id}
          href={`/blog/${item.id}`}
          className="pb-5 border-b dark:border-slate-700 "
        >
          <div className="blog-list group">
            <Image
              src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
              width={150}
              height={100}
              className="blog-image "
              alt="image blog"
            />
            <div className="flex items-start justify-center flex-col gap-5">
              <h2 className="font-semibold text-2xl ">{item.title}</h2>
              <p className="font-normal text-sm t leading-relaxed text-justify pr-6 ">
                {item.body}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
