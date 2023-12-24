"use client";
import Link from "next/link";
import React from "react";
import { Lato } from "next/font/google";
import { CiSearch } from "react-icons/ci";
import { usePathname } from "next/navigation";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin-ext"],
});

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div
      className={`navbar lg:flex justify-between max-w-[90%] left-[5%]  ${
        pathName !== "/"
          ? "bg-white text-black shadow-xl"
          : "bg-transparent text-white"
      } m-auto  absolute pt-2 z-10`}
    >
      {/* logo */}
      <div className="flex">
        <Link
          className={"btn btn-ghost text-2xl font-semibold " + lato.className}
          href={"/"}
        >
          Journal X
        </Link>
      </div>

      {/* search bar */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search a Blog"
          className={
            ` min-w-[30vw] ${
              pathName !== "/"
                ? "bg-white text-black border border-black p-2 outline-offset-2 focus:outline-blackk placeholder:text-black"
                : "bg-transparent border border-white p-2 outline-none focus:outline-white placeholder:text-white"
            } from-inherit ` +
            " " +
            lato.className
          }
        />
        <div
          className={`border-2 ${
            pathName !== "/"
              ? "border-solid border-black p-1 cursor-pointer"
              : "border-solid border-white p-1 cursor-pointer"
          } `}
        >
          <CiSearch className="" fontSize={"30px"} />
        </div>
      </div>

      {/* navigation buttons */}
      <div className="flex items-center gap-2">
        <Link
          className={lato.className + " text-lg p-2 hover:text-slate-300 "}
          href={"/"}
        >
          Home
        </Link>

        {/* ----------- */}
        <div className="dropdown dropdown-hover bg-transparent">
          <div tabIndex={0} role="button" className="m-1">
            <Link
              className={lato.className + " text-lg p-2 hover:text-slate-300 "}
              href={"/category"}
            >
              Category
              {/* ------------ */}
            </Link>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] text-black bg-white menu p-2   rounded-none w-52"
          >
            <li className={"text-md bg-transparent " + lato.className}>
              <a>Item 1</a>
            </li>
          </ul>
        </div>

        <Link
          className={lato.className + " text-lg p-2 hover:text-slate-300 "}
          href={"/about"}
        >
          About
        </Link>
        <Link
          className={lato.className + " text-lg  p-2  hover:text-slate-300 "}
          href={"/myblogs"}
        >
          My Blogs
        </Link>
        {/* auth buttons */}
        <Link
          href={"/auth/login"}
          className={
            `btn ${pathName !== "/" ? "text-black" : "text-white"} font-normal
             bg-transparent  hover:bg-black hover:text-white hover:border-black text-lg rounded-none ` +
            " " +
            lato.className
          }
        >
          Login
        </Link>
        <Link
          href={"/auth/signup"}
          className={
            `btn ${pathName !== "/" ? "text-black" : "text-white"} font-normal
             bg-transparent  hover:bg-black hover:text-white hover:border-black text-lg rounded-none ` +
            " " +
            lato.className
          }
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
