import React from 'react'
import Link from "next/link"

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
        <div>
            <div class="navbar bg-base shadow-sm">
                <div class="navbar-start">
                    {/* <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul class="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div> */}
                    <Link href="/" class="btn btn-ghost normal-case text-xl">Fajar Abdurrohman</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        {links.map((link) => (
                            <Link
                                key={link.id}
                                href={link.url}
                                class="flex px-3 text-lg font-semibold text-[#5A6E6F]
                                hover:text-[#BE8779]">
                                {link.title}
                            </Link>
                        ))}
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="btn bg-[#D5B5A6] hover-bg-[#2C3842]">Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar