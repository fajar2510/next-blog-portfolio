"use client";

import React from "react";
import Link from "next/link";
import Button from "../Button/Button";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div class="flex mx-[7rem] mt-3 shadow-sm">
      <div class="w-1/3 flex items-center justify-start ">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                class="flex px-3 text-lg font-normal text-white
                                hover:text-secondary hover:font-bold transition ease-in-out duration-300"
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
        <Link href="/" class=" normal-case text-xl">
          Fajar&apos;s Portfolio
        </Link>
      </div>

      <div class="w-2/3   flex items-center justify-end">
        <ul class="menu menu-horizontal px-1">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              class="flex px-3 text-base font-normal text-white
                                hover:text-secondary"
            >
              {link.title}
            </Link>
          ))}

          <Link
            href="/"
            onClick={() => {
              console.log("logout");
            }}
            className="flex ml-3 items-center px-4 text-sm font-medium bg-primary text-white 
                        hover:bg-opacity-75   rounded-lg"
          >
            Logout
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
