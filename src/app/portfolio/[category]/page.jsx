import React from "react";
import Link from "next/link";

const Category = ({ params }) => {
  return (
    <div className="my-5">
      <h1 className="font-bold text-2xl text-primary capitalize  py-1.5">
        {params.category}
      </h1>

      <div className="flex flex-wrap ">
        {/* kotak kiri */}
        <div className="w-1/2 flex flex-col gap-3 items-start justify-center">
          <h2 className="font-semibold text-4xl">Creative Portfolio</h2>
          <p className="t font-semibold text-sm leading-relaxed">
            Description test whole new world
          </p>
          <Link
            href="/"
            class="mt-2 px-6 py-2 bg-primary text-white shadow-lg rounded-lg hover:bg-secondary"
          >
            See more
          </Link>
        </div>
        {/* kotak kanan */}
        <div className="w-1/2 container h-[20rem] bg-[url('https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=936&q=80')] bg-cover bg-center" />
      </div>
      <div className="flex flex-wrap flex-row-reverse ">
        {/* kotak kiri */}
        <div className="w-1/2 flex flex-col gap-3 items-end justify-center">
          <h2 className="font-semibold text-4xl text-white">
            Creative Portfolio
          </h2>
          <p className="text-textLight font-semibold text-sm leading-relaxed">
            Description test whole new world
          </p>
          <Link
            href="/"
            class="mt-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary"
          >
            See more
          </Link>
        </div>
        {/* kotak kanan */}
        <div className="w-1/2 container h-[20rem] bg-[url('https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8aWxsdXN0cmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center" />
      </div>
    </div>
  );
};

export default Category;
