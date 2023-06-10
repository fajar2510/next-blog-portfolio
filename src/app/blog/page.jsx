import React from "react";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="flex flex-col mx-[7rem] gap-5 mt-6 ">
      <h1 className="font-bold text-textLight text-5xl pb-6 border-b-2 border-slate-700">
        My Blog
      </h1>
      <Link href="/blog/testId" className="pb-5 border-b border-slate-700">
        <div className="blog-list group">
          <Image
            src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
            width={150}
            height={100}
            className="blog-image "
            alt="image blog"
          />
          <div className="flex items-start justify-center flex-col gap-5">
            <h2 className="font-semibold text-2xl text-white">Title Blog 1 </h2>
            <p className="font-normal text-sm text-textLight leading-relaxed text-justify pr-6 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget nunc at sapien imperdiet vulputate. Nulla in fringilla felis.
              Suspendisse quis maximus velit. Etiam lectus odio, vulputate non
              tortor non, ultricies tempor purus. Ut at eros blandit diam tempor
              auctor. Nullam sed turpis et nibh efficitur cursus. Mauris
              scelerisque pharetra orci sit amet eleifend. Maecenas id elit
              vitae enim varius egestas. Etiam aliquam egestas lacus, eu
              bibendum velit accumsan at. Nunc blandit eros nec quam pretium
              imperdiet. Sed scelerisque faucibus sagittis. Curabitur in orci
              nec diam venenatis sollicitudin feugiat feugiat odio.
            </p>
          </div>
        </div>
      </Link>
      <Link href="/blog/testId" className="pb-5 border-b border-slate-700">
        <div className="blog-list group">
          <Image
            src="https://images.unsplash.com/photo-1507666405895-422eee7d517f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1hbHN8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
            width={150}
            height={100}
            className="blog-image"
            alt="image blog"
          />
          <div className="flex items-start justify-center flex-col gap-5">
            <h2 className="font-semibold text-2xl text-white">Title Blog 2 </h2>
            <p className="font-normal text-sm text-textLight leading-relaxed text-justify pr-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget nunc at sapien imperdiet vulputate. Nulla in fringilla felis.
              Suspendisse quis maximus velit. Etiam lectus odio, vulputate non
              tortor non, ultricies tempor purus. Ut at eros blandit diam tempor
              auctor. Nullam sed turpis et nibh efficitur cursus. Mauris
              scelerisque pharetra orci sit amet eleifend. Maecenas id elit
              vitae enim varius egestas. Etiam aliquam egestas lacus, eu
              bibendum velit accumsan at. Nunc blandit eros nec quam pretium
              imperdiet. Sed scelerisque faucibus sagittis. Curabitur in orci
              nec diam venenatis sollicitudin feugiat feugiat odio.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
